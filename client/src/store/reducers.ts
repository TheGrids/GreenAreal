import { combineReducers } from 'redux';
import { ActionType, createAction, createReducer } from 'typesafe-actions';

export const increment = createAction('INCREMENT')<number>();
export const decrement = createAction('DECREMENT')<number>();

export type CounterActions = ActionType<typeof increment | typeof decrement>;

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer<CounterState, CounterActions>(initialState)
  .handleAction(increment, (state, action) => ({ ...state, count: state.count + action.payload }))
  .handleAction(decrement, (state, action) => ({ ...state, count: state.count - action.payload }));

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
