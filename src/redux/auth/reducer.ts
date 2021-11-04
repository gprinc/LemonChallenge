import { createReducer, completeReducer, completeState} from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { Action, AuthState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    user: false
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.SIGN_IN],
  override: {
    [actions.SIGN_OUT]: (state: ImmutableObject<AuthState>) =>
      state.merge({ user: undefined }),
    [actions.SIGN_IN_FAILURE]: (state: ImmutableObject<AuthState>, action: Action<string>) =>
      state.merge({ [action.target as string]: undefined, userError: action.payload })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
