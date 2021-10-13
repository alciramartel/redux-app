import { Action, createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  multiply,
  divide,
  reset,
} from './counter.actions';

// export function counterReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//     case decrement.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }

export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, { number }) => state * number),
  on(divide, (state, { number }) => state / number),
  on(reset, (state) => initialState)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
