import React, { useEffect, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { actionCreators as countryActions } from '@redux/countries/actions';
import { State } from '@interfaces/reduxInterfaces';
import { CountryData } from '@interfaces/countries';
import { useRouteWithParams } from '@interfaces/navigation';
import Routes from '@constants/routes';
import Mapitem from '@app/components/MapItem';
import Separator from '@app/components/Separator';
import EmptyList from '@app/components/EmptyList';

import styles from './styles';
import { CountryDetailsOrder } from '@constants/order';
import { Loading } from '@app/components/Loadable';

const CountryDetails = () => {
    const route = useRouteWithParams<Routes.CountryDetails>();
    const { name } = route.params;
    const dispatch = useDispatch();
    const countryDetails = useSelector<State, CountryData[]>((state: State) => state.countries.countryDetails);
    const countryDetailsError = useSelector<State, string | null>((state: State) => state.countries.countryDetailsError);
    const countryDetailsLoading = useSelector<State, boolean>((state: State) => state.countries.countryDetailsLoading);
    const countryDetailsOrder = useSelector<State, CountryDetailsOrder>((state: State) => state.countries.countryDetailsOrder);

    useEffect(() => {
        dispatch(countryActions.getCountryDetails(name));
    }, []);

    const keyExtractor = (item: CountryData) => `${item.CityCode}-${item.Date}`;
    const renderItem = ({ item }: { item: CountryData}) => {
        const items = [{ title: "Fecha: ", text: item.Date }, { title: "Casos: ", text: item.Cases }];
        return (
            <>
                {items.map(({ title, text}) => <Mapitem title={title} text={text} />)}
            </>
        );
    }
    const renderSeparator = () => <Separator />;

    const handleButtonPress = (cdo: CountryDetailsOrder) => () => dispatch(countryActions.setCountryDetailsOrder(cdo));

    const buttons = [CountryDetailsOrder.DateDSC, CountryDetailsOrder.DateASC, CountryDetailsOrder.CasesDSC, CountryDetailsOrder.CasesASC];
    const renderButton = (cdo: CountryDetailsOrder) => {
        const isCurrent = countryDetailsOrder == cdo;
        return (
            <TouchableOpacity disabled={isCurrent} onPress={handleButtonPress(cdo)} style={[styles.orderButton, isCurrent && styles.selected]}>
                <Text style={[styles.textButton, isCurrent && styles.textSelected]}>
                    {cdo}
                </Text>
            </TouchableOpacity>);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.ordText}>Ordenar por:</Text>
            <View style={styles.buttonsContainer}>
                {buttons.map(renderButton)}
            </View>
            {countryDetailsLoading ? (
                <Loading />
            ) : countryDetails && countryDetails.length != 0 ? (
                <FlatList
                    data={countryDetails}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    ItemSeparatorComponent={renderSeparator}
                    style={styles.listContainer} />
            ) : (
                <EmptyList text="No existen datos del pa??s" />
            )}
            {countryDetailsError && <Text style={styles.errorText}>No se pudieron obtener los datos del pa??s</Text>}
        </SafeAreaView>
    );
};

export default CountryDetails;
