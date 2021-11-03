import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator
} from 'redux-persist-seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { State } from '@interfaces/reduxInterfaces';

import countries from './countries/reducer';

const transformerConfig = {
  whitelistPerReducer: {
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)]
};

configureMergeState((state: ImmutableObject<State>, diff: State) => state.merge(diff));

const reducers = combineReducers({
  countries
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, compose(...enhancers));

export default store;
