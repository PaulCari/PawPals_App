// screens/RegisterScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AuthContainer from '../components/AuthContainer.js';

const RegisterScreen = ({ navigation }) => {
  // --- NUEVO ESTADO PARA CONTROLAR EL PASO ---
  const [step, setStep] = useState(1); // 1 para usuario, 2 para mascota

  // --- Estados para el formulario de USUARIO (Paso 1) ---
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // --- Estados para el formulario de MASCOTA (Paso 2) ---
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  // Lógica de validación (la misma que ya tenías)
  useEffect(() => {
    if (confirmPassword.length > 0) {
      setPasswordError(password !== confirmPassword ? 'Las contraseñas no coinciden.' : '¡Las contraseñas coinciden!');
    } else {
      setPasswordError('');
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    const isValid = nombre.length > 0 && email.length > 0 && password.length > 0 && emailError === '' && password === confirmPassword;
    setIsFormValid(isValid);
  }, [nombre, email, password, confirmPassword, emailError]);

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    setEmailError(email.length > 0 && !emailRegex.test(email) ? 'Por favor, introduce un e-mail válido.' : '');
  };

  // --- NUEVA FUNCIÓN para manejar el paso al siguiente formulario ---
  const handleNextStep = () => {
    if (isFormValid) {
      setStep(2); // Cambiamos al paso 2
    }
  };

  // --- NUEVA FUNCIÓN para finalizar el registro ---
  const handleFinishRegistration = () => {
    // AQUÍ iría la lógica para enviar TODOS los datos (usuario y mascota) al backend
    // Por ahora, solo navegamos a la pantalla de éxito.
    navigation.navigate('Success');
  };

  // --- RENDERIZADO CONDICIONAL DE LOS FORMULARIOS ---
  const renderStepContent = () => {
    if (step === 1) {
      // --- FORMULARIO DE USUARIO (tu código anterior) ---
      return (
        <>
          <Text style={styles.title}>Registro:</Text>
          <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
          <TextInput style={[styles.input, email.length > 0 && (emailError ? styles.inputError : styles.inputSuccess)]} placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" onBlur={validateEmail} />
          {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}
          <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
          <TextInput style={[styles.input, confirmPassword.length > 0 && (password !== confirmPassword ? styles.inputError : styles.inputSuccess)]} placeholder="Repetir Contraseña" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
          {passwordError ? <Text style={password === confirmPassword ? styles.successMessage : styles.errorMessage}>{passwordError}</Text> : null}

          <TouchableOpacity 
            style={[styles.buttonPrimary, !isFormValid && styles.buttonDisabled]} 
            onPress={handleNextStep} // Ahora llama a nuestra nueva función
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </>
      );
    } else if (step === 2) {
      // --- NUEVO FORMULARIO DE MASCOTA ---
      return (
        <>
          <Text style={styles.title}>Añade tu Mascota:</Text>
          <TextInput style={styles.input} placeholder="Nombre de la mascota" value={petName} onChangeText={setPetName} />
          <TextInput style={styles.input} placeholder="Tipo de mascota (ej. Perro, Gato)" value={petType} onChangeText={setPetType} />
          <TextInput style={styles.input} placeholder="Raza" value={breed} onChangeText={setBreed} />
          <TextInput style={styles.input} placeholder="Edad" value={age} onChangeText={setAge} keyboardType="numeric" />

          {/* Botones de Guardar y Omitir para el paso 2 */}
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={styles.buttonPrimaryFlex} 
              onPress={handleFinishRegistration} // Finaliza el registro
            >
              <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.buttonSecondaryFlex} 
              onPress={handleFinishRegistration} // Omitir también te lleva a 'Success'
            >
              <Text style={styles.buttonSecondaryText}>Omitir</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  };

  return (
    <AuthContainer>
      <View style={styles.card}>
        <View style={styles.tabContainer}>
            <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                <Text style={styles.activeTabText}>Regístrate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.tabText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>

        {/* Llamamos a la función que renderiza el contenido del paso actual */}
        {renderStepContent()}

        {/* El indicador de progreso ahora se actualiza según el estado 'step' */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, step === 1 && styles.progressDotActive]} />
          <View style={[styles.progressDot, step === 2 && styles.progressDotActive]} />
        </View>
      </View>
    </AuthContainer>
  );
};

// --- Estilos --- (Añadí los necesarios para los nuevos botones)
const styles = StyleSheet.create({
  // ... (todos tus estilos anteriores) ...
  card: { backgroundColor: 'white', width: '100%', padding: 25, borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center' },
  tabContainer: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#f0f0f0', borderRadius: 25, padding: 5 },
  tab: { paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20 },
  activeTab: { backgroundColor: '#FFD100' },
  tabText: { color: '#888', fontWeight: '600' },
  activeTabText: { color: '#333', fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 40, color: '#333' },
  input: { width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: '#ddd', marginBottom: 20, fontSize: 16 },
  inputError: { borderBottomColor: 'red' },
  inputSuccess: { borderBottomColor: 'green' },
  errorMessage: { color: 'red', alignSelf: 'flex-start', marginBottom: 10, marginTop: -15 },
  successMessage: { color: 'green', alignSelf: 'flex-start', marginBottom: 10, marginTop: -15 },
  buttonPrimary: { width: '100%', height: 50, backgroundColor: '#732C71', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  buttonDisabled: { backgroundColor: '#cccccc' },
  progressContainer: { flexDirection: 'row', marginTop: 20 },
  progressDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#ccc', marginHorizontal: 5 },
  progressDotActive: { backgroundColor: '#732C71' },
  
  // --- NUEVOS ESTILOS PARA LOS BOTONES DEL PASO 2 ---
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonPrimaryFlex: {
    flex: 1,
    marginRight: 10,
    height: 50,
    backgroundColor: '#732C71',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondaryFlex: {
    flex: 1,
    marginLeft: 10,
    height: 50,
    backgroundColor: '#E6E6FA',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#732C71',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;