import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

type Props = {
  text: string;
}

const EmptyList = ({ text }: Props) => (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
);

export default EmptyList;