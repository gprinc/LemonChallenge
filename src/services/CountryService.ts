import { create } from 'apisauce';

const baseURL = 'https://api.covid19api.com';

const api = create({
  baseURL,
  timeout: 5000
});

const COUNTRIES = '/countries';
const COUNTRY_DATA =  '/total/dayone/country/{Slug}/status/confirmed';

export const getCountries = () => api.get(COUNTRIES);

export const getCountryDATA = (slug: string) => api.get(COUNTRY_DATA);
