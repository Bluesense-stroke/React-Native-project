import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import CarsList from './component/carslist';
import Header from './component/header';

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      <Header />
      <StatusBar style="auto" />
    </View>
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
