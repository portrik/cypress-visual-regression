import type { FC } from "react";

import styles from "./WordArt.module.css";

interface Properties {
  readonly text: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const WordArt: FC<Properties> = function ({ text }) {
  return <p className={styles["word-art"]}>{text}</p>;
};

export type { Properties as WordArtProperties };
