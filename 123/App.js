import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Image} from 'react-native';

export default function App() {
  


  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world!</Text>
      <Button title='Нажми меня'/>

      <Image sonrse={require('./assets/123.jpg')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
});
