import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import "../global.css"
import { verifyInstallation } from 'nativewind';
import Home from './components/Home/Home';
import Headphones from './components/Headphones/Headphones';
import Earphones from './components/Earphones/Earphones';
import MyTabs from './components/Shared/Tab';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function App() {
  verifyInstallation();

  return( 
    <NavigationContainer>
     <MyTabs/>
</NavigationContainer>)
}

