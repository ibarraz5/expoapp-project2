import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import ChatWithMe from './components/ChatWithMe';
import store from './store/store';
import logo from './assets/free.jpg';
import logo2 from './assets/soundImg.jpg';
import logo3 from './assets/muteImg.jpg';
import soundImg from './assets/soundImg.jpg';
import muteImg from './assets/muteImg.jpg';

export default function App() {

const images = [logo, logo2, logo3]
const texts = [styles.Album, styles.Title, styles.URL, styles.ThumbnailURL]
  state = {
    showSoundImg: true ,
    };
  renderImage = () => {
    const [var1, setVar] = useState(0)
    return (
      <Image
        style={{ width: 305, height: 159 }}
        source={ images[var1] }
      />
    );
  }
   myFunction = () =>{
    const [var1, setVar] = useState(0)
    const text1 = "This is Album text!"
    return (
      <View>
        <Button onPress={() => setVar(var1 + 1)} title='Next' style={styles.btn1}></Button>
      <Image
        style={{ width: 305, height: 159 }}
        source={ images[var1] }
      />
      <Text style={texts[var1]}>This is Changing text!</Text>
      </View>
    );
  }

  return (
    
    <Provider store={store}>
    <View style={styles.container}>
    <Text style={{color:'#fff', fontSize:40}}>Redux Store on Expo!</Text>
{/*       
      <Text style={styles.Album}>This is Album text!</Text>
      <Text style={styles.Title}>This is Title text!</Text>
      <Text style={styles.URL}>This is URL text!</Text>
      <Text style={styles.ThumbnailURL}>This is ThumbnailURL text!</Text>
 */}
      

      {this.myFunction()}

      <StatusBar style='inverted'/>
    </View>
    
    </Provider>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  Album: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontSize: '17px',
  },
  btn1: {
    fontSize: '28px',
    backgroundColor: '#fff',

  },
  btn: {
    margin: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 3,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
  Title: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#006400',
    fontSize: '25px',
  },
  URL: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ADD8E6',
    fontSize: '12px',
  },
  ThumbnailURL: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff0000',
    fontSize: '12px',
  },
  chatBox:{
    height:'30%',
    marginTop:'3%',
    borderWidth:1,borderColor:'#777', borderRadius:3,
  }
});
