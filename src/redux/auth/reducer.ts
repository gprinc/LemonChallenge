import { createReducer, completeReducer, completeState} from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { Action, AuthState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    user: false
  },
  ignoredTargets: {
    initialLoading: false
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.SIGN_IN],
  override: {
    [actions.SIGN_OUT]: (state: ImmutableObject<AuthState>) =>
      state.merge({ user: false }),
    [actions.SIGN_IN_FAILURE]: (state: ImmutableObject<AuthState>, action: Action<string>) =>
      state.merge({ [action.target as string]: false, userError: action.payload, userLoading: false }),
    [actions.SIGN_IN_SUCCESS]: (state: ImmutableObject<AuthState>, action: Action<boolean>) =>
      state.merge({ [action.target as string]: true, userError: '', userLoading: false }),
    [actions.SET_INITIAL_LOADING]: (state: ImmutableObject<AuthState>, action: Action<boolean>) =>
      state.merge({ initialLoading: action.payload })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
