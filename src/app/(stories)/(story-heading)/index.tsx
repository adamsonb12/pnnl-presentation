import { Heading1 } from "@lab/components/@common/typography/heading";
import Image from "next/image";
import styles from "./styles.module.css";

export const StoryHeading = ({
  title,
  subtitle,
  imageUri,
}: {
  title: string;
  subtitle: string;
  imageUri: string;
}) => {
  return (
    <>
      <div className={styles.titleContainer}>
        <Heading1>{title}</Heading1>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>

      <div className={styles.imageWrapper}>
        <Image src={imageUri} alt={title} fill className={styles.image} />
      </div>
    </>
  );
};
