import { createReducer, completeReducer, completeState} from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  description: {
    user: null
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.SIGN_IN],
  override: {
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
