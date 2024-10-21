import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import logoImg from '../assets/images/logo.png'
import avatar from '../assets/images/avatar-hidan.jpg'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function NavbarAdm({ user, vend }) {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');

    // Use o useFocusEffect para buscar o nome sempre que a tela ganhar foco
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
                }else{setFoto(fots)}
            };
            fetchNome();
        }, [])
    );

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.titleContainer}>
                <Image source={logoImg} style={styles.logo} />
                <View style={styles.user}>
                    <Text>Olá! {nome}</Text>
                    <Image source={avatar} style={styles.avatar} />
                </View>
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity style={[styles.navItem]}  onPress={() => navigation.navigate('UsuarioAdm')}>
                    {user === true ?
                        <Text style={styles.navTextAct}>Usuários</Text>
                        : <Text style={styles.navText}>Usuários</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navItem]} onPress={() => navigation.navigate('VendedorAdm')}>
                    {vend === true ?
                        <Text style={styles.navTextAct}>Administradores</Text>
                        : <Text style={styles.navText}>Administradores</Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        backgroundColor: '#fff',
        borderTopWidth: 20,
        borderColor: 'transparent',
        elevation: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    logo: {
        width: 110,
        height: 50,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navItem: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomWidth: 0,
        padding: 15,
        gap: 6
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    navTextAct: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },
})