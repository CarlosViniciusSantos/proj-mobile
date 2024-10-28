import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';
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
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  const handlerCreateCar = async () => {
    setLoading(true); // Inicia o loading
    const id = await AsyncStorage.getItem('id');

    const formData = new FormData();
    formData.append('cep', txtCep);
    formData.append('cidade', txtCidade);
    formData.append('estado', txtEstado);
    formData.append('logradouro', txtLogradouro);
    formData.append('numero', txtNumero);
    formData.append('complemento', txtComplemento);
    formData.append('marca', txtMarca);
    formData.append('modelo', txtModelo);
    formData.append('valor', parseInt(txtValor));
    formData.append('anoFabricacao', parseInt(txtAnoFabricacao));
    formData.append('cambio', txtCambio);
    formData.append('carroceria', txtCarroceria);
    formData.append('combustivel', txtCombustivel);
    formData.append('km', parseInt(txtKm));
    formData.append('cor', txtCor);
    formData.append('descricao', txtDescricao);
    formData.append('usuarioId', id);

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
        Alert.alert('Sucesso', 'Veículo cadastrado com sucesso!');
      } else {
        const responseBody = await response.text();
        console.error("Erro ao carregar carros:", response.status, responseBody);
      }
    } catch (error) {
      console.error("Erro ao registrar carro:", error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false); // Finaliza o loading
    }
  }

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

          <TextInput
            style={styles.input}
            placeholder="CEP"
            onChangeText={setTxtCep}
            value={txtCep}
            keyboardType='numeric'
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Cidade"
              onChangeText={setTxtCidade}
              value={txtCidade}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Estado"
              onChangeText={setTxtEstado}
              value={txtEstado}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.largeInput]}
              placeholder="Logradouro"
              onChangeText={setTxtLogradouro}
              value={txtLogradouro}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Número"
              onChangeText={setTxtNumero}
              value={txtNumero}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Complemento"
            onChangeText={setTxtComplemento}
            value={txtComplemento}
          />
          <Text style={styles.sectionTitle}>Fotos do Veículo</Text>

          <View style={styles.row2}>
            <Feather name="image" size={40} color="black" onPress={handleImagePicker} />
            <Feather name="image" size={40} color="black" onPress={handleImagePicker} />
            <Feather name="image" size={40} color="black" onPress={handleImagePicker} />
            <Feather name="image" size={40} color="black" onPress={handleImagePicker} />
            <Feather name="image" size={40} color="black" onPress={handleImagePicker} />
            <Feather name="image" size={40} color="black" onPress={handleImagePicker} />
            <Feather name="image" size={40} color="black" onPress={handleImagePicker} />
          </View>

          {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}

          <Text style={styles.sectionTitle}>Digite Informações do Carro</Text>

          <TextInput
            style={styles.input}
            placeholder="Marca"
            onChangeText={setTxtMarca}
            value={txtMarca}
          />
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            onChangeText={setTxtModelo}
            value={txtModelo}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor"
            onChangeText={setTxtValor}
            value={txtValor}
            keyboardType='numeric'
          />
          <TextInput
            style={styles.input}
            placeholder="Ano de Fabricação"
            onChangeText={setTxtAnoFabricacao}
            value={txtAnoFabricacao}
            keyboardType='numeric'
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Carroceria"
              onChangeText={setTxtCarroceria}
              value={txtCarroceria}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Câmbio"
              onChangeText={setTxtCambio}
              value={txtCambio}
            />
          </View>
          <TextInput
            style={[styles.input]}
            placeholder="Combustível"
            onChangeText={setTxtCombustivel}
            value={txtCombustivel}
          />
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Km"
              onChangeText={setTxtKm}
              value={txtKm}
              keyboardType='numeric'
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Cor"
              onChangeText={setTxtCor}
              value={txtCor}
            />
          </View>
          <TextInput
            style={[styles.input, styles.description]}
            placeholder="Descrição do Veículo"
            onChangeText={setTxtDescricao}
            value={txtDescricao}
            multiline
          />
          <TouchableOpacity 
            style={[styles.confirmButton, { opacity: loading ? 0.5 : 1 }]} 
            onPress={handlerCreateCar} 
            disabled={loading} // Desativa o botão durante o carregamento
          >
            <Text style={styles.confirmButtonText}>
              {loading ? 'Carregando...' : 'Confirmar'}
            </Text>
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
  largeInput: {
    width: '48%',
  },
  description: {
    height: 80,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 60,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  row2: {
    flexDirection: 'row',
    gap: 10
  },
});
