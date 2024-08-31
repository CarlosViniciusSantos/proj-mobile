import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';

export default function DescricaoCarro() {
    return (
        <View style={styles.container}>
            
            <NavbarPadrao texto="Vender Carro" />
            
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Segunda Etapa</Text>
                <Text style={styles.subtitle}>Digite Informações do Carro</Text>

                <View style={styles.formGroup}>
                    <TextInput style={styles.input} placeholder="Marca" />
                    <TextInput style={styles.input} placeholder="Modelo" />
                </View>

                <View style={styles.formGroup}>
                    <TextInput style={styles.input} placeholder="Cor" />
                    <TextInput style={styles.input} placeholder="Câmbio" />
                </View>

                <View style={styles.formGroup}>
                    <TextInput style={styles.input} placeholder="Valor" />
                    <TextInput style={styles.input} placeholder="Ano de Fabricação" />
                </View>

                <View style={styles.formGroup}>
                    <TextInput style={styles.input} placeholder="Carroceria" />
                    <TextInput style={styles.input} placeholder="Ano de Modelo" />
                </View>

                <View style={styles.formGroup}>
                    <TextInput style={styles.input} placeholder="Combustível" />
                    <TextInput style={styles.input} placeholder="Km" />
                </View>

                <TextInput 
                    style={[styles.input, styles.textArea]} 
                    placeholder="Descrição do Veículo"  
                    multiline 
                />

                <TouchableOpacity style={styles.button} onPress={() => {/* Navegação para próxima etapa */}}>
                    <Text style={styles.buttonText}>Etapa Final</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom:30,
        paddingTop: 20,
        color: 'red'
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        gap: 15
    },
    input: {
        width: '48%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    textArea: {
        width: '100%',
        height: 100,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 100,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
      
});
