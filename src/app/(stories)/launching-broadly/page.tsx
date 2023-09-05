import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";

export default function LaunchingBroadly() {
  return (
    <>
      <StoryHeading
        title="Presentation Epilogue"
        subtitle="We're going to the Moon! Or at least we wanted to."
        imageUri="/rocket-go-boom.gif"
      />

      <div>
        <WritingTitle>Launching Broadly in 2023</WritingTitle>
        <List>
          <ListItem>Launched broadly successfully in Spring of 2023</ListItem>
          <ListItem>
            Swyf reps practiced different gorrilla marketing tactics on Texas
            A&M&apos;s campus
          </ListItem>
          <ListItem>Accumulated more than 4000 users by end of Spring</ListItem>
          <ListItem>
            Failed to raise funds by end of Summer to allow a full launch in
            Fall, and started sunsetting the application
          </ListItem>
        </List>
      </div>
    </>
  );
}
