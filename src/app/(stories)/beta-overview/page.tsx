import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";

export default function BetaOverview() {
  return (
    <>
      <StoryHeading
        title="Setting Goals"
        subtitle="While joining, before my first day, I met with Swyf's product head to set goals"
        imageUri="https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
      />

      <div>
        <WritingTitle>Defining the MVP</WritingTitle>
        <List>
          <ListItem>
            Met with Product several times until we agreed on what the MVP would
            be
          </ListItem>
          <ListItem>Organized the product into user workflows</ListItem>
          <ListItem>
            We grouped each workflow into categories following the MSCW method
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Beta in 13 Weeks or Bust</WritingTitle>
        <List>
          <ListItem>
            Needed the Beta out within 13 weeks, to have some time in December
            to onboard enough users to raise more money in December/January
          </ListItem>
          <ListItem>
            Agreeing to the 13 week deadline was well understood before I
            actually started
          </ListItem>
          <ListItem>
            Company depended on me delivering to have a chance at going to
            market
          </ListItem>
          <ListItem>
            Fired before Thanksgiving if I didn't deliver (kinda joking, but
            also not joking)
          </ListItem>
        </List>
      </div>
    </>
  );
}
