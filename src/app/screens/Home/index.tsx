import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { actionCreators as countryActions } from '@redux/countries/actions';
import { State } from '@interfaces/reduxInterfaces';

import styles from './styles';
import { Country } from '@interfaces/countries';

const DATA = [{ title: '1' }, { title: '2' }, { title: '3' }]

const EmptyList = () => (
  <View>
    <Text>There are no countries to be displayed right now</Text>
  </View>
)

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const countries = useSelector<State, any>((state: State) => state.countries.countries);

  useEffect(() => {
    dispatch(countryActions.getCountries());
  }, []);

  const handlePress = () => navigation.goBack();

  const renderItem = ({ item }: { item: Country}) => <Text>{item.Country}</Text>
  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
        {countries && countries.length != 0 ? <FlatList data={countries} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} /> : <EmptyList />}
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
