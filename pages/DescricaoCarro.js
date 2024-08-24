import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DescricaoCarro() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="keyboard-backspace" size={24} color="black" style={styles.voltar} />
                <Text style={styles.voltarText}>Vender Carro</Text>
                <MaterialIcons name="account-circle" size={35} color="red" style={styles.account} />
            </View>
            
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

                <Pressable style={styles.button} onPress={() => {/* Navegação para próxima etapa */}}>
                    <Text style={styles.buttonText}>Etapa Final</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,
        backgroundColor: '#f7f7f7',
        elevation: 10,
        borderWidth: 1
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
    // inform: {
    //     width: '100%'
    // },
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
    voltarText: {
        textAlign: 'center',
        position: 'absolute',
        top: 36,
        left: 50,
        fontSize: 18,
        fontWeight: 'bold',
    },
    voltar: {
        position: 'absolute',
        top: 39,
        left: 15
    },
    account: {
        position: 'absolute',
        top: 33,
        right: 30
    },
      
});
