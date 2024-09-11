import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ExcluirModal from '../components/ModalExcluir';

export default function SideBarUser() {

    const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);

    const openModalExcluir = () => {
        setModalVisibleExcluir(true);
    };

    const closeModalExcluir = () => {
        setModalVisibleExcluir(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.perfilContainer}>
                <Image
                    source={require('../assets/images/avatar-hidan.jpg')}
                    style={styles.perfilImage}
                />
                <View style={styles.usuario}>
                    <Text style={styles.ola}>Olá!</Text>
                    <Text style={styles.username}>Usuário</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.textContainer}>
                <Text style={styles.Text}>Atualizar Dados da Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} >
                <Text style={styles.Text}>Minhas Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} >
                <Text style={styles.Text}>Sobre nós</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} >
                <Text style={styles.Text}>Regras</Text>
            </TouchableOpacity>

            <View style={ styles.excluir}>
                <TouchableOpacity style={styles.textContainer} onPress={openModalExcluir}>
                    <Text style={styles.Textex}>Excluir minha conta</Text>
                </TouchableOpacity>
            </View>
            <ExcluirModal visible={modalVisibleExcluir} onClose={closeModalExcluir}/>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    perfilContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    perfilImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    ola: {
        fontSize: 18,
        marginTop: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    textContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        backgroundColor: '#ffffff',
    },
    Text: {
        fontSize: 16,
    },
    usuario: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    excluir: {
        justifyContent: 'flex-end',
        flex:1,
        paddingBottom:50
    },
    Textex:{
        color:'red',
        fontSize: 16,
        fontWeight:'bold'
    }
});
