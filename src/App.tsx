import React, { useCallback } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import {
  addCounter as addCounterAC,
  deleteCounter as deleteCounterAC,
} from "./redux/counterSlice";
import { Button } from "./Components/Atoms";
import { CounterItem } from "./Components/Molecules";

export const App = () => {
  const dispatch = useAppDispatch();

  const counters = useAppSelector((state) => state.counter.counters);
  const countersValues = counters.map(({ value }) => value);
  const counterSum = countersValues.reduce((acc, current) => acc + current, 0);

  const addCounter = () => {
    dispatch(
      addCounterAC({
        value: counterSum,
        initialIndex: counters.length,
        id: Date.now().toString(),
      })
    );
  };

  const deleteCounter = useCallback(
    (id: string) => dispatch(deleteCounterAC({ id })),
    []
  );

  return (
    <>
      <div className={"add-counter"}>
        <Button onClick={addCounter} text={"Add new Counter"} />
      </div>
      <div className={"app-counters"}>
        {counters.map(({ id, initialIndex }) => (
          <CounterItem
            deleteCounter={deleteCounter}
            id={id}
            initialIndex={initialIndex}
            key={id}
          />
        ))}
      </div>
    </>
  );
};
