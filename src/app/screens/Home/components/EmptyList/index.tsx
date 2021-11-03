import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const EmptyList = () => (
    <View style={styles.container}>
      <Text style={styles.text}>There are no countries to be displayed right now</Text>
    </View>
);

export default EmptyList;