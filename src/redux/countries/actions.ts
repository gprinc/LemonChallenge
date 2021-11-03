import { createTypes, completeTypes } from 'redux-recompose';
import { getCountries, getCountryDetails} from '@services/CountryService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_COUNTRIES', 'GET_COUNTRY_DETAILS'] }),
  '@@COUNTRIES'
);

const TARGETS = {
  COUNTRIES: 'countries',
  COUNTRY_DETAILS: 'countryDetails'
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
  })
};
