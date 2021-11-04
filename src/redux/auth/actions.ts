import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Action } from '@interfaces/reduxInterfaces';
import { getAuth, removeAuth, setAuth } from '@services/AuthService';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['SIGN_IN'],
    ignoredActions: ['SIGN_OUT', 'SET_INITIAL_LOADING'] 
  }),
  '@@AUTH'
);

const TARGETS = {
  SIGN_IN: 'user'
};

export const actionCreators = {
    init: () => async (dispatch: Dispatch<Action<any>>) => {
        actionCreators.setInitialLoading(true);
        const isLogged = await getAuth();
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isLogged || isSignedIn)
            dispatch({
                type: actions.SIGN_IN_SUCCESS,
                target: TARGETS.SIGN_IN,
                payload: true
            });
        actionCreators.setInitialLoading(false);
    },
    setInitialLoading: (bool: boolean) => (dispatch: Dispatch<Action<any>>) => {
        dispatch({
            type: actions.SET_INITIAL_LOADING,
            payload: bool
        });
    },
    signIn: () => async (dispatch: Dispatch<Action<any>>) => {
        dispatch({
            type: actions.SIGN_IN,
            target: TARGETS.SIGN_IN
        });
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            dispatch({
                type: actions.SIGN_IN_SUCCESS,
                target: TARGETS.SIGN_IN,
                payload: true
            });
            await setAuth(true);
        } catch (error: any) {
            let errorText = '';
            let type = actions.SIGN_IN_FAILURE;
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                errorText = 'Se canceló el ingreso a través de Google';
            } else if (error.code === statusCodes.IN_PROGRESS) {
                errorText = 'El ingreso está siendo procesado';
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                errorText = 'Los Play Services del dispositivo están desactualizados o no disponibles'
            } else {
                // TODO check why it fails even when it doesn't
                type = actions.SIGN_IN_SUCCESS;
                await setAuth(true);
            }
            dispatch({ type, target: TARGETS.SIGN_IN, payload: errorText });
        }
    },
    signOut: () => async (dispatch: Dispatch<Action<any>>) => {
        dispatch({
            type: actions.SIGN_OUT,
            target: TARGETS.SIGN_IN
        });
        removeAuth();
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            auth().signOut();
        } catch (error) {
            console.error(error);
        }
    }
};
