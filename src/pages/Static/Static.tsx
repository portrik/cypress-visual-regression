import type { FC } from "react";

import { WordArt } from "$components";

import styles from "./Static.module.css";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Static: FC = function () {
  return (
    <main className={styles["wrapper"]}>
      <WordArt text="A Fantastic Static Website" />
    </main>
  );
};
