import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";
import { Link } from "@lab/components/@common/typography/link";
import { Paragraph } from "@lab/components/@common/typography/paragraph";
import { CodeBlock } from "@lab/components/@common/code-block";
import { DATADOG_HOOK, DATADOG_USE_HOOK } from "@lab/assets/code-strings";

export default function BetaLaunch() {
  return (
    <>
      <StoryHeading
        title="Beta Launch"
        subtitle="5...4...3...2...1...Launch!"
        imageUri="/falcon.gif"
      />

      <div>
        <WritingTitle>Beta Work Results</WritingTitle>
        <List>
          <ListItem>
            We launched early! - Development took only 6 weeks to meet MVP
            requirements
          </ListItem>
          <ListItem>
            No one got fired before Thanksgiving, and we celebrated
          </ListItem>
          <ListItem>
            Devs informed the CEO and head of product, that we delivered, would
            continue to do so, and that Swyf&apos;s success would hinge on their
            ability now
          </ListItem>
          <ListItem>
            Want proof we delivered?{" "}
            <Link
              href="https://alwaysbuilding.substack.com/p/oct-12-my-brother-fing-delivered"
              target="_blank"
            >
              Here
            </Link>{" "}
            is an article about us doing so from the Swyf product head.
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Launch Strategy</WritingTitle>
        <List>
          <ListItem>
            Added <Link href="https://www.datadoghq.com/">Datadog</Link> to the
            app so we could track errors, bugs, and most importantly user
            activity
          </ListItem>
          <ListItem>Launched to production on October 23, 2022</ListItem>
          <ListItem>
            Onboarded friends and family for inital testing with favorable
            forgiveness
          </ListItem>
          <ListItem>Announced offical beta on November 7t, 2022</ListItem>
          <ListItem>
            Started contacting early waitlist signups to download the app
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Beta Results</WritingTitle>
        <List>
          <ListItem>200 Beta testers by December</ListItem>
          <ListItem>
            Successfully raised an extension round in January, 2023
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Code Blocks</WritingTitle>
        <Paragraph>
          Datadog is quite easy to setup, we had a custom hook like this
        </Paragraph>
        <CodeBlock value={DATADOG_HOOK} />
        <Paragraph>
          And then used it within the jsx return statement in our root layout
          file
        </Paragraph>
        <CodeBlock value={DATADOG_USE_HOOK} />
      </div>
    </>
  );
}
