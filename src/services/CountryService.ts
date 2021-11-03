import { create } from 'apisauce';

const baseURL = 'https://api.covid19api.com';

const api = create({
  baseURL,
  timeout: 5000
});

export const getCountries = () => api.get('/countries');

export const getCountryDetails = (Slug: string) => api.get(`/total/dayone/country/${Slug}/status/confirmed`);
