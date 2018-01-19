import * as actions from './actions';
import * as selectors from './selectors';
import defaultState from './defaultState';
import * as shape from './shape';
import * as reducer from './reducers';
import { NAMESPACE } from "./types";

export const todos = {
  actions,
  selectors,
  defaultState,
  shape,
  reducer: { [NAMESPACE]: reducer },
};