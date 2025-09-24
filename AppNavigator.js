// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 1. IMPORTAMOS LA NUEVA PANTALLA
import WelcomeScreen from './screens/WelcomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
//import AddPetScreen from './screens/AddPetScreen';
import SuccessScreen from './screens/SuccessScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        // 2. CAMBIAMOS LA RUTA INICIAL
        initialRouteName="Welcome" 
        screenOptions={{ headerShown: false }} // Oculta la barra de título superior
      >
        {/* 3. AÑADIMOS LA PANTALLA A LA LISTA */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;