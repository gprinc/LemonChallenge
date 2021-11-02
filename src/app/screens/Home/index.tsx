import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const DATA = [{ title: '1' }, { title: '2' }, { title: '3' }]

const Home = () => {
  const handlePress = () => console.warn("clicked");

  const renderItem = ({ item }: any) => <Text>{item.title}</Text>

  return (
    <SafeAreaView style={styles.container}>
        <FlatList data={DATA} renderItem={renderItem} />
        <TouchableOpacity onPress={handlePress}>
            <Text>Go to Home</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
