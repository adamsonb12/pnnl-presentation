import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";

export default function OurProcess() {
  // TODO = this whole page in detail with PICS
  return (
    <>
      <StoryHeading
        title="Our Process"
        subtitle="Optimize for Velocity"
        imageUri="/cars.jpeg"
      />

      <div>
        <WritingTitle>Architecting</WritingTitle>
        <List>
          <ListItem>app structure here, decisions with the WHY</ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Planning</WritingTitle>
        <List>
          <ListItem>
            mscw with pics, strengths and weaknesses of this pattern
          </ListItem>
          <ListItem>
            Methodology, done isn&apos;t done until it&apos;s shipped
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Adapting</WritingTitle>
        <List>
          <ListItem>standups/communication</ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Build First, Design After</WritingTitle>
        <List>
          <ListItem>functionality solved before UI solved</ListItem>
          <ListItem>my design process - w/ pics</ListItem>
        </List>
      </div>
    </>
  );
}
