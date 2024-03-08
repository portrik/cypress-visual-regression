import type { FC } from "react";

import { FancyButton, WordArtWave } from "$components";

import styles from "./Movement.module.css";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Movement: FC = function() {
  return (
    <main className={styles["wrapper"]}>
      <WordArtWave text="This Should Get Everyone's Attention" />
      <FancyButton text="Click Me!" />
    </main>
  );
}
