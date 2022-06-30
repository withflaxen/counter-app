import React, { FC, memo } from "react";
import { Button } from "../../Atoms";
import { Counter } from "../Counter";
import styles from "./CounterItem.module.css";
import { CounterItemProps } from "./CounterItem.type";

export const CounterItem: FC<CounterItemProps> = memo(
  ({ deleteCounter, initialIndex, id }) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.counter}>
          <Counter
            thisID={id}
            autoCount={(initialIndex + 1) % 4 === 0 && initialIndex !== 0}
          />
        </div>
        <div className={styles.delete_btn}>
          <Button onClick={() => deleteCounter(id)} text={"delete Counter"} />
        </div>
      </div>
    );
  }
);
