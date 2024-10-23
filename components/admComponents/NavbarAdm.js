import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import logoImg from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-hidan.jpg'; // Imagem padrão
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Importar o ImagePicker para selecionar imagem

export default function NavbarAdm({ user, vend }) {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [foto_perfil, setFoto_perfil] = useState('');

    // Use o useFocusEffect para buscar o nome e a foto sempre que a tela ganhar foco
    useFocusEffect(
        React.useCallback(() => {
            const fetchNome = async () => {
                const userName = await AsyncStorage.getItem('nome');
                const userFotoPerfil = await AsyncStorage.getItem('foto');
                if (userName) {
                    setNome(userName);
                }
                if (userFotoPerfil) {
                    setFoto_perfil(userFotoPerfil);
                } else {
                    setFoto_perfil(null); // Caso não haja foto, usa a imagem padrão
                }
            };
            fetchNome();
        }, [])
    );

    // Função para selecionar uma nova foto de perfil e enviar ao backend
    const handleImagePicker = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [1, 1], // Imagem quadrada para perfil
                quality: 1,
                allowsEditing:true
            });

            if (!result.canceled) {
                const selectedImageUri = result.assets[0].uri; // Armazena a URI da imagem selecionada
                setFoto_perfil(selectedImageUri);
                await AsyncStorage.setItem('foto', selectedImageUri); // Salva a nova foto no AsyncStorage

                // Agora, envie a imagem para o backend
                await uploadFotoPerfil(selectedImageUri);

                Alert.alert("Sucesso", "Foto de perfil atualizada!");
            }
        } catch (error) {
            console.log("Erro ao selecionar imagem:", error);
        }
    };

    // Função para enviar a imagem para o backend
    const uploadFotoPerfil = async (imageUri) => {
        const token = await AsyncStorage.getItem('token');
        const userId = await AsyncStorage.getItem('id');

        const formData = new FormData();
        const fileName = imageUri.split('/').pop();
        const match = /\.(\w+)$/.exec(fileName);
        const fileType = match ? `image/${match[1]}` : `image`;

        // Adiciona a imagem ao FormData
        formData.append('foto_perfil', {
            uri: imageUri,
            name: fileName,
            type: fileType,
        });

        try {
            const response = await fetch(`https://pi3-backend-i9l3.onrender.com/usuarios/${userId}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`, // Apenas Authorization, o Content-Type é gerado automaticamente
                },
                body: formData, // O FormData envia a imagem corretamente
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Foto de perfil atualizada no backend:", data);
            } else {
                const errorText = await response.text();
                console.error("Erro ao enviar a imagem para o backend:", errorText);
            }
        } catch (error) {
            console.error("Erro ao fazer upload da imagem:", error);
        }
    };

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.titleContainer}>
                <Image source={logoImg} style={styles.logo} />
                <View style={styles.user}>
                    <Text>Olá! {nome}</Text>
                    {/* Permite ao usuário selecionar uma nova foto de perfil */}
                    <TouchableOpacity onPress={handleImagePicker}>
                        <Image
                            source={foto_perfil ? { uri: foto_perfil } : avatar} // Exibe a foto de perfil ou a imagem padrão
                            style={styles.avatar}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity style={[styles.navItem]} onPress={() => navigation.navigate('UsuarioAdm')}>
                    {user === true ?
                        <Text style={styles.navTextAct}>Usuários</Text>
                        : <Text style={styles.navText}>Usuários</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navItem]} onPress={() => navigation.navigate('Adms')}>
                    {vend === true ?
                        <Text style={styles.navTextAct}>Administradores</Text>
                        : <Text style={styles.navText}>Administradores</Text>}
                </TouchableOpacity>
            </View>
        </View>
    );
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
        borderRadius: 25,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
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
        gap: 6,
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    navTextAct: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
    },
});
