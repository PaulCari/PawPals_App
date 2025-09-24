// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const backgroundImage = require('../assets/fondo.jpg'); // Asegúrate que esta sea tu imagen de fondo
const logo = require('../assets/logo.png'); // Y este tu logo

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}> {}
      <View style={styles.overlay2}> {}
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.bottomContainer}>
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => navigation.navigate('Login')} // Esto nos llevará a la pantalla de Login
          >
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
             <Text style={styles.registerText}>
              ¿No tienes una cuenta? <Text style={styles.registerLink}>Regístrate</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0,0,0,0.6)', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
    marginTop: 2,
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#FFD100',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  
  loginButtonText: {
  fontSize: 25,
  color: '#60395F',
  fontWeight: 'bold',                // sigue siendo útil
  textShadowColor: '#ffffff',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 1,               // sube para más "glow"
},
  registerText: {
    color: 'white',
    fontSize: 20,
  },
  registerLink: {
    fontWeight: 'bold',
    color: '#FFD100',
  },
  overlay2: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(39, 36, 36, 0.3)', // blanco transparente encima → desatura
},
});

export default WelcomeScreen;
