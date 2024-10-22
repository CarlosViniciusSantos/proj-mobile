import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import Feather from '@expo/vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker

// Função para formatar a data sem alterar o fuso horário
const formatDateToInput = (dateString) => {
    if (dateString) {
        return dateString.split('T')[0].split('-').reverse().join('/');
    }
    return '';
};

// Função para formatar a data no formato YYYY-MM-DD (para envio ao backend)
const formatDateForBackend = (dateString) => {
    return dateString.split('/').reverse().join('-');
};

export default function AtualizarDadosUser() {
    const navigation = useNavigation();

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [foto, setFoto] = useState(''); // URL da foto do perfil
    const [imageUri, setImageUri] = useState(null); // URI da nova imagem selecionada
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedId = await AsyncStorage.getItem('id');
                const storedNome = await AsyncStorage.getItem('nome');
                const storedEmail = await AsyncStorage.getItem('email');
                const storedCpf = await AsyncStorage.getItem('cpf');
                const storedTelefone = await AsyncStorage.getItem('telefone');
                const storedCidade = await AsyncStorage.getItem('cidade');
                const storedEstado = await AsyncStorage.getItem('estado');
                const storedNascimento = await AsyncStorage.getItem('nascimento');
                const storedFoto = await AsyncStorage.getItem('foto');

                if (storedId) setId(storedId);
                if (storedNome) setNome(storedNome);
                if (storedEmail) setEmail(storedEmail);
                if (storedCpf) setCpf(storedCpf);
                if (storedTelefone) setTelefone(storedTelefone);
                if (storedCidade) setCidade(storedCidade);
                if (storedEstado) setEstado(storedEstado);
                if (storedNascimento) setNascimento(formatDateToInput(storedNascimento));
                if (storedFoto) setFoto(storedFoto);
            } catch (error) {
                console.error('Erro ao carregar os dados do usuário:', error);
            }
        };

        loadUserData();
    }, []);

    // Função para selecionar imagem
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [1, 1], // Aspecto quadrado para foto de perfil
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri); // Armazena a URI da imagem selecionada
        }
    };

    const handleUpdate = async () => {
        const token = await AsyncStorage.getItem('token');
    
        const cpfSemFormatacao = cpf.replace(/\D/g, '');
        const telSemFormatacao = telefone.replace(/\D/g, '');
        const nascimentoFormatado = formatDateForBackend(nascimento);
    
        // Verifica se a data é válida
        const nascimentoDate = new Date(nascimentoFormatado);
        if (isNaN(nascimentoDate.getTime())) {
            Alert.alert('Erro', 'Data de nascimento inválida.');
            return;
        }
    
        setLoading(true);
    
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('cpf', cpfSemFormatacao);
            formData.append('telefone', telSemFormatacao);
            formData.append('cidade', cidade);
            formData.append('estado', estado);
            formData.append('nascimento', nascimentoFormatado);
    
            // Se houver imagem selecionada, adiciona ao FormData
            if (imageUri) {
                const fileName = imageUri.split('/').pop();
                const match = /\.(\w+)$/.exec(fileName);
                const fileType = match ? `image/${match[1]}` : `image`;
                formData.append('foto_perfil', { // Usar o nome 'foto_perfil' como esperado pelo backend
                    uri: imageUri,
                    name: fileName,
                    type: fileType,
                });
            }
    
            const response = await fetch(`https://pi3-backend-i9l3.onrender.com/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`, // Apenas o Authorization
                },
                body: formData, // O FormData cuida do multipart/form-data
            });
    
            if (response.ok) {
                await AsyncStorage.setItem('nome', nome);
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('cpf', cpfSemFormatacao);
                await AsyncStorage.setItem('telefone', telSemFormatacao);
                await AsyncStorage.setItem('cidade', cidade);
                await AsyncStorage.setItem('estado', estado);
                await AsyncStorage.setItem('nascimento', nascimentoFormatado);
    
                // Atualiza a foto no AsyncStorage se a imagem foi trocada
                if (imageUri) {
                    await AsyncStorage.setItem('foto', imageUri);
                }
    
                Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
                navigation.navigate('Home');
            } else {
                const errorText = await response.text();
                Alert.alert('Erro', `Falha ao atualizar dados: ${errorText}`);
                console.log(errorText);
            }
        } catch (error) {
            console.error('Erro:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao atualizar. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Atualizar Meus Dados" />

            <ScrollView style={styles.container2}>
                <View style={styles.image}>
                    <TouchableOpacity onPress={handleImagePicker}>
                        {/* Exibe a imagem do usuário ou a nova imagem selecionada */}
                        <Image
                            source={imageUri ? { uri: imageUri } : foto ? { uri: foto } : require('../assets/images/nophoto.jpg')}
                            style={styles.perfilImage}
                        />
                        <Text>
                            <Feather name="edit-2" size={23} color="black" />
                            Editar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.headerContainer}></View>

                <View style={styles.formContainer}>
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                        <View style={styles.row}>
                            <TextInputMask
                                type={'cpf'}
                                style={[styles.input, styles.cidadeEstado]}
                                placeholder="CPF"
                                value={cpf}
                                onChangeText={setCpf}
                            />
                            <TextInputMask
                                type={'datetime'}
                                options={{ format: 'DD/MM/YYYY' }}
                                style={styles.input}
                                placeholder="Data de Nascimento"
                                value={nascimento}
                                onChangeText={setNascimento}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <View style={styles.row}>
                            <TextInput
                                style={[styles.input, styles.cidadeEstado]}
                                placeholder="Cidade"
                                value={cidade}
                                onChangeText={setCidade}
                            />
                            <TextInput
                                style={[styles.input, styles.cidadeEstado]}
                                placeholder="Estado"
                                value={estado}
                                onChangeText={setEstado}
                            />
                        </View>

                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            style={styles.input}
                            placeholder="Telefone"
                            value={telefone}
                            onChangeText={setTelefone}
                            keyboardType='numeric'
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.proxButton}
                        onPress={handleUpdate}
                    >
                        {loading ? (
                            <ActivityIndicator size="large" color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Confirmar</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
    container2: {
        flex: 1,
        padding: 20,
        position: 'relative'
    },
    headerContainer: {
        marginBottom: 30,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    cidadeEstado: {
        width: '48%',
    },
    proxButton: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 220,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    perfilImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    image: {
        alignItems: 'center'
    }
});
