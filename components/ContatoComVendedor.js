import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Função de envio do formulário
    console.log({ name, email, phone, message });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Mensagem"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top', // Ensures text is aligned at the top for multiline input
  },
  button: {
    backgroundColor: 'red',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FormComponent;
