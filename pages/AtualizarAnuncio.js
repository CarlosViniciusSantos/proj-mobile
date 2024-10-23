import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from '@expo/vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';

export default function AtualizarDadosCarro() {
  const navigation = useNavigation();
  const route = useRoute();
  const { veiculoId } = route.params; // Pegando o id do veículo a partir da rota
  console.log(veiculoId)

  const [id, setId] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [valor, setValor] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [cambio, setCambio] = useState('');
  const [carroceria, setCarroceria] = useState('');
  const [combustivel, setCombustivel] = useState('');
  const [km, setKm] = useState('');
  const [cor, setCor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imageUri, setImageUri] = useState(null); // Nova imagem para atualizar
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  useEffect(() => {
    const carregarDadosVeiculo = async () => {
      try {
        const response = await fetch(`https://pi3-backend-i9l3.onrender.com/veiculos/${id}`); // Convertendo veiculoId para string
        if (response.ok) {
          const data = await response.json();

          if (data.id) setId(data.id);
          if (data.cep) setCep(data.cep);
          if (data.cidade) setCidade(data.cidade);
          if (data.estado) setEstado(data.estado);
          if (data.logradouro) setLogradouro(data.logradouro);
          if (data.numero) setNumero(data.numero);
          if (data.complemento) setComplemento(data.complemento);
          if (data.marca) setMarca(data.marca);
          if (data.modelo) setModelo(data.modelo);
          if (data.valor) setValor(data.valor); // Mantém como int
          if (data.anoFabricacao) setAnoFabricacao(data.anoFabricacao); // Mantém como int
          if (data.cambio) setCambio(data.cambio);
          if (data.carroceria) setCarroceria(data.carroceria);
          if (data.combustivel) setCombustivel(data.combustivel);
          if (data.km) setKm(data.km); // Mantém como int
          if (data.cor) setCor(data.cor);
          if (data.descricao) setDescricao(data.descricao);
          if (data.foto) setImageUri(data.foto); // Caso tenha uma imagem, preenche o URI
          
        } else {
          const responseText = await response.text();
          console.error('Erro ao carregar dados do veículo:', response.status, responseText);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do veículo:', error);
      }
    };

    carregarDadosVeiculo();
  }, []);

  // Função para selecionar uma nova foto
  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
      allowsEditing: true
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Armazena a URI da imagem selecionada
    }
  };

  // Função para atualizar o veículo e a foto
  const handleUpdateCar = async () => {
    setLoading(true);
    const id = await AsyncStorage.getItem('id');

    const formData = new FormData();
    formData.append('cep', cep);
    formData.append('cidade', cidade);
    formData.append('estado', estado);
    formData.append('logradouro', logradouro);
    formData.append('numero', numero);
    formData.append('complemento', complemento);
    formData.append('marca', marca);
    formData.append('modelo', modelo);
    formData.append('valor', parseInt(valor));
    formData.append('anoFabricacao', parseInt(anoFabricacao));
    formData.append('cambio', cambio);
    formData.append('carroceria', carroceria);
    formData.append('combustivel', combustivel);
    formData.append('km', parseInt(km));
    formData.append('cor', cor);
    formData.append('descricao', descricao);
    formData.append('usuarioId', id);

    // Verifica se o usuário selecionou uma nova imagem e a adiciona ao formData
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
      const response = await fetch(`https://pi3-backend-i9l3.onrender.com/veiculos/${id}`, { // Certifique-se de que o veiculoId seja uma string
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data', // Importante para upload de arquivo
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigation.navigate('MeusVeiculos'); // Navega para a página dos veículos
      } else {
        const responseBody = await response.text();
        console.error("Erro ao atualizar carro:", response.status, responseBody);
      }
    } catch (error) {
      console.error("Erro ao atualizar carro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <NavbarPadrao texto="Atualizar Veículo" />
      <View style={styles.container2}>
        <ScrollView style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Onde se Localiza o Carro?</Text>

          <TextInput
            style={styles.input}
            placeholder="CEP"
            value={cep}
            onChangeText={setCep}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Cidade"
              value={cidade}
              onChangeText={setCidade}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Estado"
              value={estado}
              onChangeText={setEstado}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.largeInput]}
              placeholder="Logradouro"
              value={logradouro}
              onChangeText={setLogradouro}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Número"
              value={numero}
              onChangeText={setNumero}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Complemento"
            value={complemento}
            onChangeText={setComplemento}
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
            value={marca}
            onChangeText={setMarca}
          />
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            value={modelo}
            onChangeText={setModelo}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Ano de Fabricação"
            value={anoFabricacao}
            onChangeText={setAnoFabricacao}
            keyboardType="numeric"
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Câmbio"
              value={cambio}
              onChangeText={setCambio}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Carroceria"
              value={carroceria}
              onChangeText={setCarroceria}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Km"
              value={km}
              onChangeText={setKm}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Combustível"
              value={combustivel}
              onChangeText={setCombustivel}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Cor"
            value={cor}
            onChangeText={setCor}
          />

          <TextInput
            style={[styles.input, styles.description]}
            placeholder="Descrição do Veículo"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />

          <TouchableOpacity
            style={[styles.confirmButton, { opacity: loading ? 0.5 : 1 }]}
            onPress={handleUpdateCar}
            disabled={loading} // Desativa o botão durante o carregamento
          >
            <Text style={styles.confirmButtonText}>
              {loading ? 'Atualizando...' : 'Confirmar'}
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
