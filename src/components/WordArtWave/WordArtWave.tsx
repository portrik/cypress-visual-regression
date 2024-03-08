import type { FC } from "react";

import styles from "./WordArtWave.module.css";

interface Properties {
  readonly text: string;
}

export type { Properties as WordArtWaveProperties };

// eslint-disable-next-line @typescript-eslint/naming-convention
export const WordArtWave: FC<Properties> = function ({ text }) {
  return <p className={`${styles["word-art-wave"] ?? ""} has-motion`}>{text}</p>;
};
