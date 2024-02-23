import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Div from './src/div.js'
import P from './src/p.js'

export default function App() {
  return (
    <Div style={styles.container}>
      <P>Quebrando as leis. 😎</P>
      <StatusBar style="auto" />
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
