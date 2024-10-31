import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation } from '@react-navigation/native';

export default function EnviarProposta() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = () => {
        // Exibir mensagem de sucesso
        Alert.alert('Mensagem enviada com sucesso');

        navigation.goBack();
    };

    return (
        <View style={styles.container2}>
            <NavbarPadrao texto="Enviar Proposta" />
            <ScrollView contentContainerStyle={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Mensagem"
                    multiline
                    value={mensagem}
                    onChangeText={setMensagem}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container2: {
        flex: 1,
    },
    content: {
        padding: 20,
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
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
