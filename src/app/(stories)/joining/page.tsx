import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";

export default function Joining() {
  return (
    <>
      <StoryHeading
        title="Joining Swyf - The Proposal"
        subtitle="Swyf's contractors were not working out, not even me"
        imageUri="https://images.unsplash.com/photo-1598976701972-40f0bf429d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
      />

      <div>
        <WritingTitle>Context</WritingTitle>
        <List>
          <ListItem>The developer who quit early had chosen Flutter</ListItem>
          <ListItem>
            Swyf&apos;s contractors had mostly been junior level
          </ListItem>
          <ListItem>
            The contractors didn&apos;t read between the lines to solve
            problems, they strictly did what they were told
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Resulting Situation</WritingTitle>
        <List>
          <ListItem>Flutter codebase was a disorganized mess</ListItem>
          <ListItem>UI in the app was stiff, ugly, and unintuitive</ListItem>
          <ListItem>The mobile app had never been tested on Android</ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>My Takeaways</WritingTitle>
        <List>
          <ListItem>
            Startups are in the business of delivering, not mentoring
          </ListItem>
          <ListItem>
            Mobile experience needed someone to own it as a whole with long term
            success and interest in mind
          </ListItem>
          <ListItem>
            The app was not as far along as Swyf&apos;s head of product believed
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>My Proposal to Swyf&apos;s Team</WritingTitle>
        <List>
          <ListItem>First: Fire all contractors, including me</ListItem>
          <ListItem>
            Second, Option 1: Hire a full time flutter engineering expert to
            build the app
          </ListItem>
          <ListItem>
            Second, Option 2: Hire a React Native engineer to build the app from
            the ground up
          </ListItem>
          <ListItem>
            If they elected to go with Option 2, I confirmed to Swyf I could
            deliver in 13 weeks or less if I could borrow the engineer they just
            hired to do backend to help in the mobile app
          </ListItem>
        </List>
      </div>
    </>
  );
}
