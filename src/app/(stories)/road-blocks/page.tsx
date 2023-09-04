import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";
import { Link } from "@lab/components/@common/typography/link";
import { PLAID_CODE_STRING } from "@lab/assets/code-strings";
import { CodeBlock } from "@lab/components/@common/code-block";
import { Paragraph } from "@lab/components/@common/typography/paragraph";

export default function RoadBlocks() {
  // TODO = this whole page in detail with PICS
  return (
    <>
      <StoryHeading
        title="Road Blocks"
        subtitle="Handling obstacles without buckling"
        imageUri="https://images.unsplash.com/photo-1531757208063-1573afd5900e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
      />

      <div>
        <WritingTitle>Plaid Integration</WritingTitle>
        <List>
          <ListItem>
            <Link href="https://plaid.com/" target="_blank">
              Plaid
            </Link>{" "}
            is a third-party service that securely allows users to link their
            bank accounts
          </ListItem>
          <ListItem>
            It has a nasty{" "}
            <Link
              href="https://plaid.com/docs/link/react-native/#getting-started"
              target="_blank"
            >
              integration
            </Link>{" "}
            for React Native applications
          </ListItem>
          <ListItem>
            We identified beforehand that Plaid had a lot of unknowns, and could
            bottleneck the entire beta
          </ListItem>
          <ListItem>
            Played to our strengths - Jason (dev helping me) spent time spiking
            on Plaid, while I ran full speed with the app
          </ListItem>
          <ListItem>
            Once the research was done, we mobbed its incorporation and testing,
            until it worked
          </ListItem>
          <ListItem>
            We had budgeted a whole week on Plaid, it took a week and a half
            before it was working on a real mobile device
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Isn&apos;t this disgusting?</WritingTitle>
        <CodeBlock value={PLAID_CODE_STRING} />
        <Paragraph>
          For my own pride, let me add that this was improved upon greatly over
          time over several iterations, but this was its first initial working
          version.
        </Paragraph>
      </div>
    </>
  );
}
