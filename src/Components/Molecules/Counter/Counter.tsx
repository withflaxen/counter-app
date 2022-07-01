import styles from "./Counter.module.css";
import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { decrement, increment } from "../../../redux/counterSlice";
import { Button } from "../../Atoms";
import { CounterProps } from "./Counter.type";

export const Counter: FC<CounterProps> = ({ thisID, autoCount }) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(
    (state) => state.counter.counters.find(({ id }) => id === thisID)!.value
  );

  const inc = () => dispatch(increment({ id: thisID }));
  const dec = () => dispatch(decrement({ id: thisID }));

  useEffect(() => {
    if (!autoCount) return;
    const intervalID = setInterval(inc, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {autoCount || <Button rounded onClick={inc} text={"+"} />}
      <span>{value}</span>
      {autoCount || <Button rounded onClick={dec} text={"-"} />}
    </div>
  );
};
