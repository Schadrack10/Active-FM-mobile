import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext, useState } from 'react';
import { ThemeContext } from './components/context/context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from './app/HomeScreen';
import LiveScreen from './app/LiveScreen';
import AboutScreen from './app/AboutScreen';
import ShowScreen from './app/ShowScreen';
import CommunityChat from './app/CommunityChat'



const Stack = createNativeStackNavigator();

export default function App() {

  const greet = 'hii screen'


  const [theme, setTheme] = useState(true)
  const [loading ,  setLoading] = useState(false)
  const [loadingFetch , setLoadingFetch] = useState(true) 
  const [showIcon, setShowIcon] = useState(false)

  return (

    <ThemeContext.Provider value={{ greet, theme, setTheme , loading , setLoading , showIcon, setShowIcon }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Shows" component={ShowScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Live" component={LiveScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Community" component={CommunityChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>

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
