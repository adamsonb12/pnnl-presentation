import Image from "next/image";
import styles from "./page.module.css";
import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { List, ListItem } from "@lab/components/@common/typography/list";
import { Heading2 } from "@lab/components/@common/typography/heading";
import { spacing16 } from "@lab/components/@common/spacing";

export default function Home() {
  return (
    <div>
      <h1 className="heading1">Hello There, I&apos;m Brett Adamson</h1>
      <div className={styles.picsContainer}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            alt="brett adamson"
            fill
            src="/family.jpg"
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            alt="brett adamson"
            fill
            src="/hiking.jpg"
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            alt="brett adamson"
            fill
            src="/floats.jpg"
          />
        </div>
      </div>

      <section className={styles.section}>
        <WritingTitle>BUILDING SWYF, A FIN-TECH STARTUP</WritingTitle>
        <p className="paragraph">
          Joining a stage 0 startup, with less than 5 months of runway, appears
          unwise to most. Additionally, the challenge of adopting a new
          technology and building a consumer facing application from scratch
          before runway depletes is daunting.
        </p>
        <p className="paragraph">
          Swyf launched its MVP to beta after only 6 weeks of development. It
          launched more broadly shortly after in early 2023. Swyf&apos;s team
          optimized for velocity in order to get to market quickly, attract
          users, and raise funds. The consumer facing side of Swyf consisted of
          iOS and Android mobile applications and a full-stack web application.
          Those applications were built utilizing modern technologies consisting
          of but not limited to Typescript, React, Next.js, GraphQL, Apollo,
          React Native, Expo, and EAS.
        </p>
        <p className="paragraph">
          This presentation aims to recount how Swyf user facing applications
          were designed, architected, built, and launched with only a small team
          of 3 engineers. It will analyze the team&apos;s processes, approach to
          problem solving, and time optimization techniques used to increase
          velocity at all costs. Most importantly, it will dive into Swyf as a
          product and how it was built, shipped, and improved upon.
        </p>
      </section>

      <section className={styles.section}>
        <Heading2
          style={{
            marginBottom: spacing16,
          }}
        >
          tl;dr
        </Heading2>
        <WritingTitle>Situation</WritingTitle>
        <List>
          <ListItem>
            Swyf, a brand new fintech needed to launch an app to beta and raise
            more money
          </ListItem>
        </List>
      </section>

      <section className={styles.section}>
        <WritingTitle>Goals</WritingTitle>
        <List>
          <ListItem>13 weeks to launch a consumer fintech app to Beta</ListItem>
          <ListItem>
            App must be fully functioning with authentication, onboarding,
            identity verification, bank account linking, deposits, withdrawals,
            account management, and peer to peer payments
          </ListItem>
          <ListItem>
            Needed to get 100 beta testers by December to prove to investors we
            could execute
          </ListItem>
          <ListItem>
            After acquiring funding, Swyf needed to focus on launching broadly
            in 2023
          </ListItem>
        </List>
      </section>

      <section className={styles.section}>
        <WritingTitle>Action</WritingTitle>
        <List>
          <ListItem>
            Joined in September 2022 to take responsibility over the entire user
            experience
          </ListItem>
          <ListItem>Identified key workflows and defined MVP</ListItem>
          <ListItem>
            Focused all developer processes to optimize for velocity
          </ListItem>
          <ListItem>
            Designed, architected, and built react native mobile app
          </ListItem>
        </List>
      </section>

      <section className={styles.section}>
        <WritingTitle>Result</WritingTitle>
        <List>
          <ListItem>Launched to production in October 23, 2022</ListItem>
          <ListItem>Launched to official Beta November 7th, 2022</ListItem>
          <ListItem>
            200 Beta testers by December. Successfully raised an extension round
            in January, 2023
          </ListItem>
          <ListItem>
            Developed key features to expand the beta and launch broadly in
            April, 2023
          </ListItem>
        </List>
      </section>
    </div>
  );
}
