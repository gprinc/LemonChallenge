import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';
import { actionCreators as countryActions } from '@redux/countries/actions';
import { State } from '@interfaces/reduxInterfaces';
import { CountryData } from '@interfaces/countries';
import { useRouteWithParams } from '@interfaces/navigation';
import Routes from '@constants/routes';

import styles from './styles';

const CountryDetails = () => {
  const dispatch = useDispatch();

  const route = useRouteWithParams<Routes.CountryDetails>();
  const { name } = route.params;

  return (
    <SafeAreaView style={styles.container}>
        <Text>{name || 'Nothing'}</Text>
    </SafeAreaView>
  );
};

export default CountryDetails;
