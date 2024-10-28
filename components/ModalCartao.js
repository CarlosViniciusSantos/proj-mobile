import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://pi3-backend-i9l3.onrender.com'; // Substitua pela URL base da sua API

const CustomModal = ({ visible, onClose, setCardDetails }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleCardCreation = async () => {
    const userId = await AsyncStorage.getItem('id');
    try {
        const response = await fetch(`${baseURL}/credit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usuarioId: userId,
                numero: cardNumber,
                validade: expiryDate,
                cvv: cvv,
                nomeTitular: cardHolder,
                bandeira: 'Visa',
            }),
        });

        const data = await response.json();

        if (response.ok) {
            const newCard = {
                id: data.cartaoCredito.id,
                numero: cardNumber,
                last4Digits: cardNumber.slice(-4),
                usuarioId: userId,
            };
            setCardDetails(newCard);
            Alert.alert("Sucesso", "Cartão cadastrado com sucesso.");
            onClose();
        } else {
            Alert.alert("Erro", data.message || "Erro ao cadastrar o cartão.");
        }
    } catch (error) {
        Alert.alert("Erro", "Não foi possível cadastrar o cartão. Tente novamente.");
    }
};



  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.close}>
            <AntDesign name="close" size={24} color="black" onPress={onClose} />
          </View>
          <Text style={styles.title}>Informações do Cartão</Text>
          <TextInput
            style={styles.input}
            placeholder="Número do Cartão"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Data de Validade (MM/AA)"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="CVV"
              value={cvv}
              onChangeText={setCvv}
              secureTextEntry
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nome do Titular"
            value={cardHolder}
            onChangeText={setCardHolder}
          />
          <TouchableOpacity style={styles.button} onPress={handleCardCreation}>
            <Text style={styles.buttonText}>Salvar Informações do Cartão</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '95%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  halfInput: {
    width: '48%'
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  close: {
    width: '100%'
  }
});

export default CustomModal;
