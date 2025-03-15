/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native';







function App(): React.JSX.Element {


  return (
    <>
    <Text>hello</Text>
    <View style={styles.sectionContainer}>
    <Image source={require('./image/formal_me.jpg')} style={styles.image}  />
    <Button title="Press me" onPress={() => {}} />

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
   
  sectionContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,

  },

  image: {
    height: 100,
    width: 50,
  },
});

export default App;
