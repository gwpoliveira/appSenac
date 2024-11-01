import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    setError(''); // Limpa erros anteriores
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário registrado:', userCredential.user);
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('O email já está em uso. Tente fazer login.');
        } else {
          setError('Erro ao registrar usuário. Tente novamente.');
        }
        console.error('Erro ao registrar usuário:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
});
