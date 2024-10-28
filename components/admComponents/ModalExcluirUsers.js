import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation,useRoute } from '@react-navigation/native';

const ExcluirUserModal = ({ visible, onClose }) => {
    const route = useRoute()
    const {nome, id} = route.params
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleDeleteAccount = async () => {
        setLoading(true);
        try {

            const response = await fetch(`https://pi3-backend-i9l3.onrender.com/admin/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                Alert.alert('Sucesso', `Conta de ${nome} foi excluida`);
                onClose(); // Fecha o modal
                navigation.navigate('UsuarioAdm'); 
            } else {
                const errorText = await response.text();
                Alert.alert('Erro', `Falha ao excluir conta: ${errorText}`);
                console.log(errorText)
            }
        } catch (error) {
            console.error('Erro ao excluir conta:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar excluir a conta.');
        } finally {
            setLoading(false);
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
                    <View style={styles.textview}>
                        <Text style={styles.text2}>Deseja realmente excluir a conta de {nome}?</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.botao2} onPress={handleDeleteAccount} disabled={loading}>
                            <Text style={styles.text}>{loading ? 'Excluindo...' : 'Excluir'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={onClose}>
                            <Text style={styles.text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '95%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    close: {
        width: '100%'
    },
    botao: {
        width: '40%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        elevation: 3,
    },
    botao2: {
        width: '40%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
    },
    textview: {
        marginBottom:30
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text3: {
        fontSize: 17
    },
    textpor: {
        padding: 25,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ExcluirUserModal;
