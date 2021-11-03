import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { actionCreators as countryActions } from '@redux/countries/actions';
import { State } from '@interfaces/reduxInterfaces';
import { CountryData } from '@interfaces/countries';
import { useRouteWithParams } from '@interfaces/navigation';
import Routes from '@constants/routes';
import Mapitem from '@app/components/MapItem';
import Separator from '@app/components/Separator';
import EmptyList from '@app/components/EmptyList';

import styles from './styles';

const CountryDetails = () => {
    const route = useRouteWithParams<Routes.CountryDetails>();
    const { name } = route.params;
    const dispatch = useDispatch();
    const countryDetails = useSelector<State, CountryData[]>((state: State) => state.countries.countryDetails);

    useEffect(() => {
        dispatch(countryActions.getCountryDetails(name));
    }, []);

    const renderItem = ({ item }: { item: CountryData}) => {
        const items = [{ title: "Fecha: ", text: item.Date }, { title: "Casos: ", text: item.Cases }];
        return (
            <>
                {items.map(({ title, text}) => <Mapitem title={title} text={text} />)}
            </>
        );
    }
    const renderSeparator = () => <Separator />
    const renderEmpty = () => <EmptyList text="No se pudieron obtener los datos del país" />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={countryDetails} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} ListEmptyComponent={renderEmpty} />
        </SafeAreaView>
    );
};

export default CountryDetails;
