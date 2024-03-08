import type { FC } from "react";

import content from "./content.txt?raw";
import styles from "./Text.module.css";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TextPage: FC = function () {
  return <p className={styles["wrapper"]}>{content}</p>;
};
