import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DescricaoCarro2 () {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="keyboard-backspace" size={24} color="black" style={styles.voltar} />
                <Text style={styles.voltarText}>Vender Carro</Text>
                <MaterialIcons name="account-circle" size={35} color="red" style={styles.account} />
            </View>
            
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Terceira Etapa</Text>
                <Text style={styles.subtitle}>Adicione Fotos do Carro</Text>

                <Pressable style={styles.button} onPress={() => {/* Navegação para próxima etapa */}}>
                    <Text style={styles.buttonText}>Publicar Carro</Text>
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
        marginBottom: 10,
        color: 'red',
        paddingTop:30
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
