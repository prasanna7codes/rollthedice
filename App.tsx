/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{ useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Alert
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



  


function App(): React.JSX.Element {

  const [imageSource, setImageSource] = useState(require('./image/formal_me.jpg'));
  
  const changeImage = () => {
    console.log('pressed');
    setImageSource((prevImage: any) =>
      prevImage === require('./image/formal_me.jpg')
        ? require('./image/me_recent.jpg')
        : require('./image/formal_me.jpg')
    );
  }


  return (
    <>
    <Text>hello</Text>
    <View style={styles.sectionContainer}>
    <Image source={imageSource} style={styles.image}  />
    <Button title="Press me" onPress={changeImage} />

    </View>
    </>
  );
}

const styles = StyleSheet.create({

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
