import { createTypes, completeTypes } from 'redux-recompose';
import { getCountries } from '@services/CountryService';

export const actions = createTypes(
  completeTypes({ primaryActions: ['GET_COUNTRIES'] }),
  '@@COUNTRIES'
);

const TARGETS = {
  COUNTRIES: 'countries'
};

export const actionCreators = {
  getCountries: () => ({
    type: actions.GET_COUNTRIES,
    target: TARGETS.COUNTRIES,
    service: getCountries
  })
};
