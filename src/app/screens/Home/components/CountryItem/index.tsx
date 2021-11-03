import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

type Props = {
    Country: string;
    Slug: string;
    ISO2: string;
    handlePress: () => void;
}

const CountryItem = ({ Country, Slug, ISO2, handlePress }: Props) => {
    const items = [{ title: "Slug", text: Slug }, { title: "ISO2", text: ISO2 }];
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.country}>{Country}</Text>
            {items.map(({ title, text}) => (
                <View style={styles.mapContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
            ))}
        </TouchableOpacity>
    );
};

export default CountryItem;