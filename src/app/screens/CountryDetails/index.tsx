import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { actionCreators as countryActions } from '@redux/countries/actions';
import { State } from '@interfaces/reduxInterfaces';
import { CountryData } from '@interfaces/countries';
import { useRouteWithParams } from '@interfaces/navigation';
import Routes from '@constants/routes';

import styles from './styles';

const CountryDetails = () => {
    const route = useRouteWithParams<Routes.CountryDetails>();
    const { name } = route.params;
    const dispatch = useDispatch();
    const countryDetails = useSelector<State, CountryData[]>((state: State) => state.countries.countryDetails);

    useEffect(() => {
        dispatch(countryActions.getCountryDetails(name));
    }, []);

    const renderItem = ({ item }: { item: CountryData}) => (
        <>
            <Text>{item.Date}</Text>
        </>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={countryDetails} renderItem={renderItem} />
        </SafeAreaView>
    );
};

export default CountryDetails;
