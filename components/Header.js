import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import fots from '../assets/images/avatar-hidan.jpg'

export default function Header() {
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
        <View style={styles.header}>
            <View style={styles.user}>
                <Text style={styles.name}>{nome}</Text>
                <Image
                    source={foto ? { uri: foto } : require('../assets/images/nophoto.jpg')}
                    style={styles.avatar}
                />
            </View>
            <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 18,
        paddingBottom: 10,
        paddingTop: 40,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    name: {
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
    },
    logo: {
        width: 110,
        height: 50,
    },
});
