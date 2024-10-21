import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExcluirModal from '../components/ModalExcluir';
import SairModal from '../components/ModalSair';
import { useFocusEffect } from '@react-navigation/native';

import fots from '../assets/images/avatar-hidan.jpg'

export default function SideBarUser() {

    const navigation = useNavigation();

    const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);

    const openModalExcluir = () => {
        setModalVisibleExcluir(true);
    };

    const closeModalExcluir = () => {
        setModalVisibleExcluir(false);
    };

    const [modalVisibleSair, setModalVisibleSair] = useState(false);

    const openModalSair = () => {
        setModalVisibleSair(true);
    };

    const closeModalSair = () => {
        setModalVisibleSair(false);
    };

    const [nome, setNome] = useState('Usuário');
    const [foto, setFoto] = useState();

    useFocusEffect(
        React.useCallback(() => {
            const fetchNome = async () => {
                const user = await AsyncStorage.getItem('nome');
                const foto = await AsyncStorage.getItem('foto');
                if (user) {
                    setNome(user);
                }
                if (foto) {
                    setFoto(foto)
                } else { setFoto(fots) }
            };
            fetchNome();
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={styles.perfilContainer}>
                <Image
                    source={foto ? { uri: foto } : require('../assets/images/nophoto.jpg')}
                    style={styles.perfilImage}
                />
                <View style={styles.usuario}>
                    <Text style={styles.ola}>Olá!</Text>
                    <Text style={styles.username}>{nome}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('AtualizarDados')}>
                <Text style={styles.Text}>Atualizar Dados da Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('Compras')}>
                <Text style={styles.Text}>Minhas Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('SobreNos')}>
                <Text style={styles.Text}>Sobre nós</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('Regras')}>
                <Text style={styles.Text}>Regras</Text>
            </TouchableOpacity>

            <View style={styles.excluir}>
                <TouchableOpacity style={styles.textContainer} onPress={openModalExcluir}>
                    <Text style={styles.Textex}>Excluir minha conta</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sair}>
                <TouchableOpacity style={styles.textContainer} onPress={openModalSair}>
                    <Text style={styles.Textex}>Sair</Text>
                </TouchableOpacity>
            </View>
            <ExcluirModal visible={modalVisibleExcluir} onClose={closeModalExcluir} />
            <SairModal visible={modalVisibleSair} onClose={closeModalSair} />

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    excluir: {
        justifyContent: 'flex-end',
        flex: 1
    },
    Textex: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    sair: {
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
});
