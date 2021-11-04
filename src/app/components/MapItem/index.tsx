import React from 'react';
import { View, Text } from 'react-native';

import styles  from './styles';

type Props = {
    title: string;
    text: string | number;
}

const Mapitem = ({ title, text }: Props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
);

export default Mapitem