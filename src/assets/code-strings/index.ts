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

export const DATADOG_HOOK = `
export const DatadogViewMetrics = () => {
  const segments = useSegments();
  const pathname = usePathname();
  const viewKey = segments.join("/");

  const { userId } = useUserId();

  useEffect(() => {
    DdRum.startView(
      viewKey,
      pathname,
      {
        userId: userId ?? undefined,
        platform: Platform.OS,
        version: Application.nativeApplicationVersion,
        nativeBuildVersion: Application.nativeBuildVersion,
        buildNumber: CI_PIPELINE_IID,
      },
      Date.now()
    );
  }, [viewKey, pathname]);

  return null;
};
`;

export const DATADOG_USE_HOOK = `
export default function Root() {
  return (
    <DatadogViewMetrics />
  )
}
`;

export const PLAID_IMPROVED = `
import { Alert } from "react-native";
import { PlaidLink, LinkSuccess } from "react-native-plaid-link-sdk";
import { useRouter } from "expo-router";
import { ReactNode, useEffect, useState } from "react";

import { useLocalizationContext } from "../../providers/localization";
import {
  LINKED_ACCOUNTS_PLAID_REFETCH_QUERY,
  useCreatePlaidLinkToken,
  useFinishPlaidToken,
} from "./data";

export const Plaid = ({
  returnRoute,
  children,
}: {
  returnRoute: "/home" | "/linked-bank-accounts";
  children: ReactNode;
}) => {
  const { getTranslation } = useLocalizationContext();
  const router = useRouter();

  const [token, setToken] = useState<string>();
  const [createPlaidLinkToken, { loading }] = useCreatePlaidLinkToken();
  const finishPlaidLink = useFinishPlaidToken();

  useEffect(() => {
    if (!token && !loading) {
      createPlaidLinkToken({
        onCompleted: (data) => {
          if (data?.plaidStartLink) {
            setToken(data.plaidStartLink);
          }
        },
      });
    }
  }, []);

  return (
    <PlaidLink
      tokenConfig={{
        token: token as string,
        noLoadingState: false,
      }}
      onSuccess={async (success: LinkSuccess) => {
        if (success.metadata.institution) {
          finishPlaidLink({
            variables: {
              institutionId: success.metadata.institution.id,
              publicToken: success.publicToken,
            },
            refetchQueries: [{ query: LINKED_ACCOUNTS_PLAID_REFETCH_QUERY }],
            onCompleted: () => {
              router.push(returnRoute);
            },
            onError: () => {
              Alert.alert(
                getTranslation("genericAlertErrorTitle"),
                getTranslation("plaidLinkNewAccountFailedMessage")
              );
              router.push(returnRoute);
            },
          });
        }
      }}
      onExit={() => {
        router.push(returnRoute);
      }}
    >
      {children}
    </PlaidLink>
  );
};
`;

export const PLANNING_OUTPUT = `
### MUST
​
- Add / Withdraw funds - getLinkedAccount query to finish
- Send - need mutation
- Request - need mutation
- Qr code to scan
- Qr code scanner to find user
- eas build secrets (GOOGLE API KEYS)
​
- Build out welcome screens (carousel)
- Play store
- Transaction searching
- Transaction list item
​
- Plaid - Jason (PENDING)
​
### SHOULD
​
- Revisit auth
- In app notification - Brett
​
### COULD
​
- User detail
- Transaction detail
- Linked account detail
- Other items from "rework" list
​
### WONT
`;
