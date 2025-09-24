// screens/SuccessScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AuthContainer from '../components/AuthContainer';
import { Feather } from '@expo/vector-icons'; // Importamos el set de íconos

const SuccessScreen = ({ navigation }) => {
  return (
    <AuthContainer>
      <View style={styles.card}>
        {/* Ícono de Éxito */}
        <View style={styles.iconContainer}>
          <Feather name="check" size={50} color="#6A0DAD" />
        </View>

        <Text style={styles.title}>REGISTRO TERMINADO</Text>
        <Text style={styles.subtitle}>El proceso se ha realizado correctamente</Text>
        
        {/* El diseño muestra un campo de contraseña aquí, pero el flujo lógico
            sería ir a la pantalla principal. Lo adaptamos para que sea más funcional. */}
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </AuthContainer>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E6E6FA', // Morado claro
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonPrimary: {
    width: '100%',
    height: 50,
    backgroundColor: '#6A0DAD',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;