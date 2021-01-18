import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 140,
    paddingTop: 50,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
      fontWeight: 'bold',
      fontSize: 25,
      lineHeight: 25,
      letterSpacing: -0.024,
      color: '#fff',
      marginLeft: 15,
      fontFamily: 'OpenSans_700Bold',
  }
});
