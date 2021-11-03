import { Dispatch } from 'react';
import { createTypes, completeTypes } from 'redux-recompose';
import { getCountries, getCountryDetails} from '@services/CountryService';
import { CountryDetailsOrder } from '@constants/order';
import { Action } from '@interfaces/reduxInterfaces';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_COUNTRIES', 'GET_COUNTRY_DETAILS'],
    ignoredActions: ['SET_COUNTRY_DETAILS_ORDER'] 
  }),
  '@@COUNTRIES'
);

const TARGETS = {
  COUNTRIES: 'countries',
  COUNTRY_DETAILS: 'countryDetails',
  COUNTRY_DETAILS_ORDER: 'countryDetailsOrder'
};

export const actionCreators = {
  getCountries: () => ({
    type: actions.GET_COUNTRIES,
    target: TARGETS.COUNTRIES,
    service: getCountries
  }),
  getCountryDetails: (Slug: string) => ({
    type: actions.GET_COUNTRY_DETAILS,
    target: TARGETS.COUNTRY_DETAILS,
    service: getCountryDetails,
    payload: Slug
  }),
  setCountryDetailsOrder: (order: CountryDetailsOrder) => (dispatch: Dispatch<Action<CountryDetailsOrder>>) => {
    dispatch({
      type: actions.COUNTRY_DETAILS_ORDER,
      target: TARGETS.COUNTRY_DETAILS_ORDER,
      payload: order
    });
  },
};
