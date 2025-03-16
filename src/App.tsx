/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{ useState } from 'react';
import type { JSX, PropsWithChildren } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ImageSourcePropType
} from 'react-native';




const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'learning to use alert',
    [
      {
        text: 'Cancel',
        //onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
    
  
  );


  import DiceOne from '../assets/One.png';
  import DiceTwo from '../assets/Two.png';
  import DiceThree from '../assets/Three.png';
  import DiceFour from '../assets/Four.png';
  import DiceFive from '../assets/Five.png';
  import DiceSix from '../assets/Six.png';

  type DiceProps = PropsWithChildren<{
    imageUrl:ImageSourcePropType
  }>
   
  const Dice = (imageUrl:any) => {
    return (
      <View>
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    )
  }

function App(): React.JSX.Element {

  


  return (
    <>
    <Text>HELLO</Text>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
