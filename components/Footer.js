import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Footer() {
    const navigation = useNavigation();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const user = await AsyncStorage.getItem('nome');
            setLoggedIn(!!user);  // Converte a existência do usuário em um booleano
        };
        checkLoginStatus();
    }, []);

    const handleMenuPress = () => {
        if (loggedIn) {
            navigation.navigate('SideBarUser');
        } else {
            navigation.navigate('Sidebar');
        }
    };

    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Feather name="home" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Catalogo')}>
                <Feather name="search" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CadastrarVeiculo')}>
                <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MeusVeiculos')}>
                <Ionicons name="car-sport-outline" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMenuPress}>
                <Feather name="menu" size={25} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        padding: 15,
        backgroundColor: 'darkred',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});
