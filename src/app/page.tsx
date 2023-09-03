import Image from "next/image";
import styles from "./page.module.css";
import { WritingTitle } from "@lab/components/@common/typography/writing-title";

export default function Home() {
  return (
    <div>
      <h1 className="heading1">Hello there, I&apos;m Brett Adamson</h1>
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
        <WritingTitle>BIO</WritingTitle>
        <p className="paragraph">
          Brett Adamson is a Senior Software Engineer specializing in front end
          web development. Brett grew up in Pasco Washington on a farm and began
          programming while studying at Brigham Young University. As a student,
          Brett completed a 4 month summer internship at the Pacific Northwest
          National Laboratory before graduating in 2018.
        </p>
        <p className="paragraph">
          Brett spent the first few years of his career in larger organizations
          and teams as a front e n ddeveloper. Since April of 2021, Brett has
          worked on small innovative startup teams, prioritizingvelocity of
          development and autonomy of work.
        </p>
        <p className="paragraph">
          Most recently, as a Senior Software Engineer at a fin-tech startup
          called Swyf, Brett played a pivotal role building a robust
          peer-to-peer payment system. His responsibilities were designing,
          architecting, and developing the entire user experience, including iOS
          and Android mobile applications and a full-stack web application. Now
          Brett is looking to join a larger team where he can continue to be a
          key contributor, while learning from others.
        </p>
      </section>

      <section className={styles.section}>
        <WritingTitle>BUILDING SWYF, A FIN-TECH STARTUP</WritingTitle>
        <p className="paragraph">
          Joining a stage Ostartup, with less than 5 months of runway, appears
          unwise to most. Additionally, the challenge of adopting a new
          technology and building a consumer facing application from scratch
          before runway depletes is daunting.
        </p>
        <p className="paragraph">
          Swyf launched its MVP to beta after only 6 weeks of development. It
          launched more broadly shortly after in early 2023. Swyf&apos;s team
          optimized for velocity in order to get to market quickly, attack
          users, and raise funds. The consumer facing side of Swyf consisted of
          iOS and Android mobile applications and a full-stack w e b
          application. Those applications were built utilizing modern
          technologies consisting of but not limited to Typescript, React,
          Next.js, GraphQL, Apollo, React Native, Expo, and EAS.
        </p>
        <p className="paragraph">
          This presentation aims to recount how Swyf user facing applications
          were designed, architected, built, and launched with only a small team
          of 3 engineers. It will analyze the team&apos;s processes, approach to
          problem solving, and t i m eoptimization techniques used to increase
          velocity at all costs. Most importantly, ti will dive into Swyf as a
          product and how it was built, shipped, and improved upon.
        </p>
      </section>
    </div>
  );
}
