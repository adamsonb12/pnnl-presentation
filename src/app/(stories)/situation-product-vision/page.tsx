import { Heading1 } from "@lab/components/@common/typography/heading";
import { StoryHeading } from "../(story-heading)";
import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { List, ListItem } from "@lab/components/@common/typography/list";

export default function ProductVision() {
  return (
    <>
      <StoryHeading
        title="Swyf's Product Vision"
        subtitle="What exactly was the peer to peer payment app setting out to be?"
        imageUri="https://media.licdn.com/dms/image/D560BAQE3Yxfby6lv-w/company-logo_200_200/0/1693236533890?e=1701907200&v=beta&t=ZoJdhnixiUnONfLw5m-sRfSXWCrwKRfk5XNe_ksm94k"
      />

      <div>
        <WritingTitle>The Pitch</WritingTitle>
        <List>
          <ListItem>
            Domestically, a peer to peer payment application with rewards.
            Basically Venmo, but with credit card like rewards
          </ListItem>
          <ListItem>
            Airtight security and identity verification, preventing most fraid
            seen on top competitors
          </ListItem>
          <ListItem>
            Long term, an international blockchain solution, reducing typical
            international fees to near $0
          </ListItem>
        </List>
      </div>
    </>
  );
}
