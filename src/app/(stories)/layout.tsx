import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function StoryPageLayout({ children }: { children: ReactNode }) {
  return <div className={styles.storyContainer}>{children}</div>;
}
