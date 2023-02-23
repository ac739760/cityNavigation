import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);
const Drawer = createDrawerNavigator();
const ArtImage = require('./assets/art.png');
const magnificentImage = require('./assets/mile.png');
const WillisImage = require('./assets/willis.png');
const navyImage = require('./assets/pier.png');
const waterImage = require('./assets/water.png');

export default function App() {
  

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function ArtInstitute(){
  return(
    <Image style = {styles.imageContainer} source = {ArtImage}/>
  );
}
function MagnificentMile(){
  return(
    <Image style = {styles.imageContainer} source = {magnificentImage}/>
  );
}
function NavyPier(){
  return(
    <Image style = {styles.imageContainer} source = {navyImage}/>
  );
}
function WaterTower(){
  return(
    <Image style = {styles.imageContainer} source = {waterImage}/>
  );
}
function WillisTower(){
  return(
    <Image style = {styles.imageContainer} source = {WillisImage}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    width: 320,
    height: 480,
    alignSelf: 'center',
    marginTop: 60,
  }
});
