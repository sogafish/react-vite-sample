import { createModule } from "typeless";
import { CounterSymbol } from "./symbol";

export const [useModule, CounterActions, getCounterState] = createModule(CounterSymbol)
  .withActions({
    startCount: null, // null means no args
    countDone: (count: number) => ({ payload: { count } }),
  })
  .withState<CounterState>()

export interface CounterState {
  isLoading: boolean;
  count: number;
}
