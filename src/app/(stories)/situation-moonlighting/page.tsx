import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";

export default function SituationMoonlighting() {
  return (
    <>
      <StoryHeading
        title="How it Started, Moonlighting"
        subtitle="Swyf desperately needed someone to take ownership of their mobile application"
        imageUri="/gondor.webp"
      />

      <div>
        <WritingTitle>Swyf Needed Front End Help</WritingTitle>
        <List>
          <ListItem>
            Swyf had spent 8 months building a backend fintech platform, and was
            nearly ready to ship it
          </ListItem>
          <ListItem>
            Their original mobile engineer, quit quickly after realizing the
            startup life was not for them (quite understandable honestly)
          </ListItem>
          <ListItem>
            Swyf leaned on mobile contracting firms, foreign and domestic help
            to start building a mobile app in Flutter
          </ListItem>
          <ListItem>
            After months of development, they had difficulty understanding their
            progress
          </ListItem>
          <ListItem>
            Swyf&apos;s Head of Product reached out to me about a 45 day
            contract to help develop and assess their mobile app
          </ListItem>
          <ListItem>I quickly realized Swyf needed help</ListItem>
        </List>
      </div>
    </>
  );
}
