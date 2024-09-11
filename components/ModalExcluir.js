import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import ExcluirDefModal from '../components/ModalExcluirDef'

const ExcluirModal = ({ visible, onClose }) => {

    const [modalVisibleExcluirDef, setModalVisibleExcluirDef] = useState(false);

    const openModalExcluirDef = () => {
        setModalVisibleExcluirDef(true);
    };
    
    const closeModalExcluirDef = () => {
        setModalVisibleExcluirDef(false);
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
                        <Text style={styles.text2}>Deseja realmente excluir sua conta?</Text>
                    </View>
                    <View style={styles.textpor}>
                        <Text style={styles.text3}>Depois que você apaga uma conta, não há como voltar atrás. Por favor, tenha certeza.</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.botao2} onPress={openModalExcluirDef}>
                            <Text style={styles.text}>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ExcluirDefModal visible={modalVisibleExcluirDef} onClose={closeModalExcluirDef}/>
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
        // marginBottom: 10,
        elevation: 3,
    },
    botao2: {
        width: '40%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        // marginBottom: 10,
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
        //  marginBottom: 20,
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text3: {
        fontSize: 17
    },
    textpor: {
        // marginBottom: 20,
        padding: 25,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ExcluirModal;
