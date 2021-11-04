import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { Action } from '@interfaces/reduxInterfaces';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['SIGN_IN'],
    ignoredActions: ['SIGN_OUT'] 
  }),
  '@@AUTH'
);

const TARGETS = {
  SIGN_IN: 'user'
};

export const actionCreators = {
  signIn: () => (dispatch: Dispatch<Action<any>>) => {
    dispatch({
      type: actions.SIGN_IN,
    });
  },
  signOut: () => (dispatch: Dispatch<Action<any>>) => {
    dispatch({
      type: actions.SIGN_OUT,
    });
  },
};
