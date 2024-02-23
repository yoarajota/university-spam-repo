import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Image, ScrollView, SectionList, StyleSheet, TextInput } from 'react-native';
import Div from './src/Div.js'
import P from './src/P.js'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const DATA2 = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function App() {
  const [text, onChangeText] = useState('');

  return (
    <Div style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <P>Quebrando as leis. 😎</P>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </P>
        <Button
          title="Press me"
          onPress={() => Alert.alert(text)}
        />
        <FlatList
          data={DATA}
          renderItem={({ item }) => <P style={styles.title}>{item.title}</P>}
          keyExtractor={item => item.id}
        />
        <SectionList
          sections={DATA2}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Div style={styles.item}>
              <P style={styles.title}>{item}</P>
            </Div>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <P style={styles.header}>{title}</P>
          )}
        />
        <StatusBar style="auto" />
      </ScrollView>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
});
