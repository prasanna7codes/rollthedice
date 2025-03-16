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
  useColorScheme,
  Pressable
} from 'react-native';

import { trigger } from 'react-native-haptic-feedback';



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

 
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
 


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

  const rollDiceonTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
  }

  trigger('impactLight', options);

}

  return (
    <View style={styles.container}>
    <Dice imageUrl={diceImage} />

    <Pressable
      onPress={rollDiceonTap}
      >
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>

  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
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
    borderColor: 'red',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
