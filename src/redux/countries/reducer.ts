import { createReducer, completeReducer, completeState} from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { CountryDetailsOrder } from '@constants/order';
import { Action, CountriesState } from '@interfaces/reduxInterfaces';
import { CountryData } from '@interfaces/countries';
// TODO check why it is not working the alias for utils
import { orderCountryDetails } from '../../utils/order';

import { actions } from './actions';

const stateDescription = {
  description: {
    countries: [],
    countryDetails: []
  },
  ignoredTargets: {
    countryDetailsOrder: CountryDetailsOrder.DateDSC
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_COUNTRIES, actions.GET_COUNTRY_DETAILS],
  override: {
    [actions.GET_COUNTRY_DETAILS_SUCCESS]: (state: ImmutableObject<CountriesState>, action: Action<CountryData[]>) =>
      state.merge({ [action.target as string]: orderCountryDetails(action.payload), countryDetailsLoading: false }),
    [actions.SET_COUNTRY_DETAILS_ORDER]: (state: ImmutableObject<CountriesState>, action: Action<CountryDetailsOrder>) =>
      state.merge({ [action.target as string]: action.payload, countryDetails: orderCountryDetails(state.countryDetails.asMutable(), action.payload) })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
