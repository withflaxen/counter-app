import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Counter = {
  id: string;
  value: number;
  initialIndex: number;
};

export type CounterPayload = {
  id: string;
};

export interface CounterState {
  counters: Counter[];
}

const initialState: CounterState = {
  counters: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<CounterPayload>) => {
      const { id: counterID } = action.payload;
      state.counters.find(({ id }) => id === counterID)!.value++;
    },
    decrement: (state, action: PayloadAction<CounterPayload>) => {
      const { id: counterID } = action.payload;
      state.counters.find(({ id }) => id === counterID)!.value--;
    },
    deleteCounter: (state, action: PayloadAction<CounterPayload>) => {
      const { id: counterID } = action.payload;
      state.counters = state.counters.filter(({ id }) => id !== counterID);
    },
    addCounter: (state, action: PayloadAction<Counter>) => {
      state.counters.push(action.payload);
    },
  },
});

export const { increment, decrement, addCounter, deleteCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
