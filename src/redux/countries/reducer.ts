import { createReducer, completeReducer, completeState} from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  description: {
    countries: [],
    countryDetails: []
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_COUNTRIES, actions.GET_COUNTRY_DETAILS]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
