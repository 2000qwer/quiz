/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import * as React from 'react';
 import { View, Text, Button, StyleSheet } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from './screens/Home';
 import Quiz from './screens/Quiz';
 import Result from './screens/Result';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 //import { createDrawerNavigator } from '@react-navigation/drawer';
 //import myStack from './navigation/index';

 const Stack = createNativeStackNavigator();

 const Drawer = createDrawerNavigator();

 function App() {
   return (
     <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Quiz" component={Quiz} />
          <Drawer.Screen name="Result" component={Result} />
        </Drawer.Navigator>
     </NavigationContainer>
   );
 }
 
export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});