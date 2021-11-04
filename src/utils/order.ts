import { CountryDetailsOrder } from "@constants/order";
import { CountryData } from "@interfaces/countries";

export const orderCountryDetails = (countryDetails?: CountryData[], order?: CountryDetailsOrder) => {
    if (!countryDetails) 
        return countryDetails;
    switch (order) {
        case CountryDetailsOrder.CasesASC:
            return countryDetails.sort((cd1: CountryData, cd2: CountryData) =>
                cd1.Cases < cd2.Cases ? 1 : cd1.Cases == cd2.Cases && cd1.Date > cd2.Date  ? 1 : -1 );
        case CountryDetailsOrder.CasesDSC:
            return countryDetails.sort((cd1: CountryData, cd2: CountryData) =>
                cd1.Cases > cd2.Cases ? 1 : cd1.Cases == cd2.Cases && cd1.Date > cd2.Date  ? 1 : -1 );
        case CountryDetailsOrder.DateASC:
            return countryDetails.sort((cd1: CountryData, cd2: CountryData) => cd1.Date > cd2.Date ? 1 : -1 );
        default:
            return countryDetails.sort((cd1: CountryData, cd2: CountryData) => cd1.Date < cd2.Date ? 1 : -1 );
    }
}