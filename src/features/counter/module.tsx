import React from 'react';
import * as Rx from 'typeless/rx';
import { useModule, CounterActions, CounterState } from './interface';
import { Counter } from './components/Counter';

useModule
.epic()
.on(CounterActions.startCount, () =>
  Rx.of(CounterActions.countDone(1)).pipe(Rx.delay(500))
);

const initialCounterState: CounterState = {
  isLoading: false,
  count: 0,
};

useModule
  .reducer(initialCounterState)
  .on(CounterActions.startCount, state => {
    state.isLoading = true;
  })
  .on(CounterActions.countDone, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  })

export const CounterModule = () => {
  useModule();

  return <Counter />;
};
