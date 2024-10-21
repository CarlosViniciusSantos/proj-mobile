import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default function CadastrarVeiculo() {
    const navigation = useNavigation();

    const [txtCep, setTxtCep] = useState('');
    const [txtCidade, setTxtCidade] = useState('');
    const [txtEstado, setTxtEstado] = useState('');
    const [txtLogradouro, setTxtLogradouro] = useState('');
    const [txtNumero, setTxtNumero] = useState('');
    const [txtComplemento, setTxtComplemento] = useState('');
    const [txtMarca, setTxtMarca] = useState('');
    const [txtModelo, setTxtModelo] = useState('');
    const [txtValor, setTxtValor] = useState('');
    const [txtAnoFabricacao, setTxtAnoFabricacao] = useState('');
    const [txtCambio, setTxtCambio] = useState('');
    const [txtCarroceria, setTxtCarroceria] = useState('');
    const [txtCombustivel, setTxtCombustivel] = useState('');
    const [txtKm, setTxtKm] = useState('');
    const [txtCor, setTxtCor] = useState('');
    const [txtDescricao, setTxtDescricao] = useState('');

    const [imageUri, setImageUri] = useState(null);

    const handlerCreateCar = async () => {
        const id = await AsyncStorage.getItem('id');

        const formData = new FormData();
        formData.append('cep', "11111111");
        formData.append('cidade', "Caragua");
        formData.append('estado', "SP");
        formData.append('logradouro', "Centro");
        formData.append('numero', "281");
        formData.append('complemento', "Casa");
        formData.append('marca', "Fiat");
        formData.append('modelo', "Uno");
        formData.append('valor', 6000);
        formData.append('anoFabricacao', 2000);
        formData.append('cambio', "Auto");
        formData.append('carroceria', "Antiga");
        formData.append('combustivel', "Gasolina");
        formData.append('km', 5000);
        formData.append('cor', "preto");
        formData.append('descricao', "Só quero postar a foto dessa bomba");
        formData.append('usuarioId', parseInt(id));

        if (imageUri) {
            const fileName = imageUri.split('/').pop();
            const match = /\.(\w+)$/.exec(fileName);
            const fileType = match ? `image/${match[1]}` : `image`;
            formData.append('foto', {
                uri: imageUri,
                name: fileName,
                type: fileType,
            });
        }

        try {
            const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data', // Importante para upload de arquivo
                },
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigation.navigate('Home');
            } else {
                const responseBody = await response.text();
                console.error('Erro ao carregar carros:', response.status, responseBody);
            }
        } catch (error) {
            console.error('Erro ao registrar carro:', error);
        }
    };

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri); // Armazena a URI da imagem
        }
    };

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Vender Carro" />
            <View style={styles.container2}>
                <ScrollView style={styles.formContainer}>
                    <Text style={styles.sectionTitle}>Onde se Localiza o Carro?</Text>

                    <TouchableOpacity onPress={handleImagePicker} style={styles.imageButton}>
                        <Text style={styles.imageButtonText}>Escolher Imagem</Text>
                    </TouchableOpacity>

                    {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}
   
                    <TouchableOpacity style={styles.confirmButton} onPress={handlerCreateCar}>
                        <Text style={styles.confirmButtonText}>Confirmar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container2: {
        flex: 1,
        padding: 20,
    },
    formContainer: {
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallInput: {
        width: '48%',
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 10,
        borderRadius: 10,
    },
    confirmButton: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
