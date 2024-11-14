import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Earphones from '../Earphones/Earphones';
import Headphones from '../Headphones/Headphones';
import Speakers from '../Speakers/Speakers';
import Home from '../Home/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' }
      }} >
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Heaphones" component={Headphones} options={{
          tabBarLabel: 'Headphones',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="headphones" size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Earphones" component={Earphones} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="earbuds" size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Speakers" component={Speakers} options={{
          tabBarLabel: 'Speakers',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="speaker" size={size} color={color} />;
          },
        }}  />
    </Tab.Navigator>
  );
}

