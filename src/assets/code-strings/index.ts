export const PLAID_CODE_STRING = `import React, { useRef } from "react";
import { WebView } from "react-native-webview";
import queryString from "query-string";
import { LinkErrorCode, LinkErrorType, LinkExitMetadataStatus } from "./const";
import { useNavigation } from "@react-navigation/core";
import { DrawerRootParamList } from "../../navigation/linking-configuration";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  LINKED_ACCOUNTS_PLAID_REFETCH_QUERY,
  useFinishPlaidToken,
} from "./data";

export default function PlaidLink({
  uri,
  linkToken,
  onError,
  onEvent,
  onExit,
  onSuccess,
  previousScreen,
}) {
  const finishPlaidLink = useFinishPlaidToken();
  let webviewRef = useRef();
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerRootParamList>>();

  const handleNavigationStateChange = (event) => {
    if (event.title.indexOf("Redirect") > -1) {
      navigation.navigate("PlaidRedirect", {
        plaidLinkToken: linkToken,
        redirectUri: event.url,
        previousScreen,
      });
    }
    if (event.url.startsWith("plaidlink://")) {
      const eventParams = queryString.parse(event.url.replace(/.*\?/, ""));

      const linkSessionId = eventParams.link_session_id;
      const mfaType = eventParams.mfa_type;
      const requestId = eventParams.request_id;
      const viewName = eventParams.view_name;
      const errorCode = eventParams.error_code;
      const errorMessage = eventParams.error_message;
      const errorType = eventParams.error_type;
      const exitStatus = eventParams.exist_status;
      const institutionId = eventParams.institution_id;
      const institutionName = eventParams.institution_name;
      const institutionSearchQuery = eventParams.institution_search_query;
      const timestamp = eventParams.timestamp;

      if (event.url.startsWith("plaidlink://event") && onEvent) {
        onEvent({
          eventName: eventParams.event_name,
          metadata: {
            linkSessionId,
            mfaType,
            requestId,
            viewName,
            errorCode,
            errorMessage,
            errorType,
            exitStatus,
            institutionId,
            institutionName,
            institutionSearchQuery,
            timestamp,
          },
        });
      } else if (event.url.startsWith("plaidlink://exit") && onExit) {
        onExit({
          error: {
            // @ts-ignore
            errorCode: LinkErrorCode[errorCode],
            errorMessage: eventParams.error_message,
            // @ts-ignore
            errorType: LinkErrorType[errorType],
          },
          metadata: {
            // @ts-ignore
            status: LinkExitMetadataStatus[exitStatus],
            institution: {
              id: institutionId,
              name: institutionName,
            },
            linkSessionId,
            requestId,
          },
        });
      } else if (event.url.startsWith("plaidlink://connected") && onSuccess) {
        const publicToken = eventParams.public_token;

        finishPlaidLink({
          variables: {
            institutionId,
            publicToken,
          },
          refetchQueries: [{ query: LINKED_ACCOUNTS_PLAID_REFETCH_QUERY }],
          onCompleted: () => onSuccess(),
          onError: () => onError(),
        });
      }
      return false;
    }
    return true;
  };

  return (
    <WebView
      source={{
        uri,
      }}
      // @ts-ignore
      ref={(ref) => (webviewRef = ref)}
      // @ts-ignore
      onError={() => webviewRef.reload()}
      originWhitelist={["https://*", "plaidlink://*"]}
      onShouldStartLoadWithRequest={handleNavigationStateChange}
    />
  );
}
`;
