import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { actionCreators as countryActions } from '@redux/countries/actions';
import { actionCreators as authActions } from '@redux/auth/actions';
import { State } from '@interfaces/reduxInterfaces';
import { Country } from '@interfaces/countries';
import Routes from '@constants/routes';
import Separator from '@app/components/Separator';
import EmptyList from '@app/components/EmptyList';
import { Loading } from '@app/components/Loadable';

import styles from './styles';
import CountryItem from './components/CountryItem';
import { CountryDetailsOrder } from '@constants/order';

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const countries = useSelector<State, Country[]>((state: State) => state.countries.countries);
  const countriesError = useSelector<State, string | null>((state: State) => state.countries.countriesError);
  const countriesLoading = useSelector<State, boolean>((state: State) => state.countries.countriesLoading);

  useEffect(() => {
    dispatch(countryActions.getCountries());
  }, []);

  // TODO change this
  const handleLogout = () => dispatch(authActions.signOut());

  const keyExtractor = (item: Country) => `${item.Country}-${item.Slug}`;
  const renderItem = ({ item }: { item: Country}) => {
    const handlePress = () => {
      dispatch(countryActions.setCountryDetailsOrder(CountryDetailsOrder.DateDSC))
      navigation.navigate(Routes.CountryDetails, { name: item.Slug });
    }
    return <CountryItem handlePress={handlePress} {...item} />;
  }
  const renderSeparator = () => <Separator />;

  return (
    <SafeAreaView style={styles.container}>
        {countriesLoading ? (
          <Loading />
        ) : countries && countries.length != 0 ? (
            <FlatList
              data={countries}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={renderSeparator}
              style={styles.fullWidth} />
          ) : (
            <EmptyList text="No hay pa??ses que mostrar" />
        )}
        {countriesError && <Text style={styles.errorText}>No se pudieron obtener los pa??ses</Text>}
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
