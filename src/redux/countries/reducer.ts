import { createReducer, completeReducer, completeState} from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { CountryDetailsOrder } from '@constants/order';
import { Action, CountriesState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  description: {
    countries: [],
    countryDetails: []
  },
  ignoredTargets: {
    countrDetailsOrder: CountryDetailsOrder.DateDSC
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_COUNTRIES, actions.GET_COUNTRY_DETAILS],
  override: {
    [actions.AUTH_INIT]: (state: ImmutableObject<CountriesState>, action: Action<CountryDetailsOrder>) =>
      state.merge({ [action.target as string]: action.payload})
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
