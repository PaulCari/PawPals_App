import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Asegúrate de poner tu logo en la carpeta assets/images/
const logo = require('../assets/logo.png'); // <-- CAMBIA ESTO por la ruta a tu logo

const LoginScreen = () => {
  // Usamos "useState" para guardar lo que el usuario escribe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />

      {/* Título */}
      <Text style={styles.title}>Welcome to PawPals</Text>

      {/* Campo de Email */}
      <TextInput
        style={styles.input}
        placeholder="User / E-mail"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail} // Actualiza el estado 'email' al escribir
      />

      {/* Campo de Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry={true} // Oculta la contraseña
        value={password}
        onChangeText={setPassword} // Actualiza el estado 'password' al escribir
      />
      
      {/* Botón de Iniciar Sesión */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Links de abajo */}
      <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
      <Text style={styles.linkText}>
        ¿No tienes una cuenta? <Text style={styles.registerLink}>Regístrate</Text>
      </Text>
    </View>
  );
};

// Aquí van los estilos. Es como CSS pero en JavaScript.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // O el color de fondo que uses
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#8A2BE2', // Un color morado, ajústalo al tuyo
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 15,
    color: '#555',
  },
  registerLink: {
    color: '#8A2BE2', // Color morado para el link
    fontWeight: 'bold',
  },
});

export default LoginScreen;