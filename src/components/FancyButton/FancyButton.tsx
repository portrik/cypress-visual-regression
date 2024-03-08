import type { FC, MouseEvent as ReactMouseEvent } from "react";

import styles from "./FancyButton.module.css";

interface Properties {
  readonly text: string;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
function handleClick(event: ReactMouseEvent<HTMLButtonElement>): void {
  event.preventDefault();
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FancyButton: FC<Properties> = function ({ text }) {
  return (
    <button className={styles["button"]} onClick={handleClick} type="button">
      {text}
    </button>
  );
};

export type { Properties as FancyButtonProperties };
