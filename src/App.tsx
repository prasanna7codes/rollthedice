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
  ImageSourcePropType,
  Appearance,
  useColorScheme
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


  import DiceOne from '../assests/One.png';
  import DiceTwo from '../assests/Two.png';
  import DiceThree from '../assests/Three.png';
  import DiceFour from '../assests/Four.png';
  import DiceFive from '../assests/Five.png';
  import DiceSix from '../assests/Six.png';

  type DiceProps = PropsWithChildren<{
    imageUrl:ImageSourcePropType
  }>
   
  const Dice = ({imageUrl}: DiceProps):JSX.Element => {
    return (
      <View>
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    )
  }

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  
  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? '#121212' : '#FFF2F2', // Dark or light background
  };

  const textStyle = {
    color: isDarkMode ? '#FFFFFF' : '#000000', // Dark or light text
  };

  return (
    <View style={containerStyle}>
    <Text style={textStyle}>Hello</Text>
    <Dice imageUrl={diceImage} />
  </View>
    
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
