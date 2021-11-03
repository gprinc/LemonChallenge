import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { actionCreators as countryActions } from '@redux/countries/actions';
import { State } from '@interfaces/reduxInterfaces';
import { Country } from '@interfaces/countries';
import Routes from '@constants/routes';

import styles from './styles';
import CountryItem from './components/CountryItem';
import EmptyList from './components/EmptyList';

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const countries = useSelector<State, any>((state: State) => state.countries.countries);

  useEffect(() => {
    dispatch(countryActions.getCountries());
  }, []);

  // TODO change this
  const handleLogout = () => navigation.goBack();

  const renderItem = ({ item }: { item: Country}) => {
    const handlePress = () => navigation.navigate(Routes.CountryDetails, { name: item.Slug });
    return <CountryItem handlePress={handlePress} {...item} />;
  }
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
        <FlatList data={countries} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} ListEmptyComponent={<EmptyList />} style={styles.fullWidth} /> 
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
