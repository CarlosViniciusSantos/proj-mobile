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

  const [veiculoData, setVeiculoData] = useState({
    cep: '',
    cidade: '',
    estado: '',
    logradouro: '',
    numero: '',
    complemento: '',
    marca: '',
    modelo: '',
    valor: '',
    anoFabricacao: '',
    cambio: '',
    carroceria: '',
    combustivel: '',
    km: '',
    cor: '',
    descricao: '',
  });
  const [imageUri, setImageUri] = useState(null); // Nova imagem para atualizar
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  useEffect(() => {
    const carregarDadosVeiculo = async () => {
      try {
        const response = await fetch(`https://pi3-backend-i9l3.onrender.com/veiculos/${veiculoId.toString()}`); // Convertendo veiculoId para string
        if (response.ok) {
          const data = await response.json();
          setVeiculoData(data); // Supondo que os dados do veículo vêm diretamente
        } else {
          const responseText = await response.text();
          console.error('Erro ao carregar dados do veículo:', response.status, responseText);
        }
      } catch (error) {
        console.error('Erro ao carregar dados do veículo:', error);
      }
    };

    carregarDadosVeiculo();
  }, [veiculoId]);

  // Função para selecionar uma nova foto
  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
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
    formData.append('cep', veiculoData.cep);
    formData.append('cidade', veiculoData.cidade);
    formData.append('estado', veiculoData.estado);
    formData.append('logradouro', veiculoData.logradouro);
    formData.append('numero', veiculoData.numero);
    formData.append('complemento', veiculoData.complemento);
    formData.append('marca', veiculoData.marca);
    formData.append('modelo', veiculoData.modelo);
    formData.append('valor', parseInt(veiculoData.valor));
    formData.append('anoFabricacao', parseInt(veiculoData.anoFabricacao));
    formData.append('cambio', veiculoData.cambio);
    formData.append('carroceria', veiculoData.carroceria);
    formData.append('combustivel', veiculoData.combustivel);
    formData.append('km', parseInt(veiculoData.km));
    formData.append('cor', veiculoData.cor);
    formData.append('descricao', veiculoData.descricao);
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
      const response = await fetch(`https://pi3-backend-i9l3.onrender.com/veiculos/${veiculoId.toString()}`, { // Certifique-se de que o veiculoId seja uma string
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
            value={veiculoData.cep}
            onChangeText={(cep) => setVeiculoData({ ...veiculoData, cep })}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Cidade"
              value={veiculoData.cidade}
              onChangeText={(cidade) => setVeiculoData({ ...veiculoData, cidade })}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Estado"
              value={veiculoData.estado}
              onChangeText={(estado) => setVeiculoData({ ...veiculoData, estado })}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.largeInput]}
              placeholder="Logradouro"
              value={veiculoData.logradouro}
              onChangeText={(logradouro) => setVeiculoData({ ...veiculoData, logradouro })}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Número"
              value={veiculoData.numero}
              onChangeText={(numero) => setVeiculoData({ ...veiculoData, numero })}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Complemento"
            value={veiculoData.complemento}
            onChangeText={(complemento) => setVeiculoData({ ...veiculoData, complemento })}
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
            value={veiculoData.marca}
            onChangeText={(marca) => setVeiculoData({ ...veiculoData, marca })}
          />
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            value={veiculoData.modelo}
            onChangeText={(modelo) => setVeiculoData({ ...veiculoData, modelo })}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={veiculoData.valor.toString()}
            onChangeText={(valor) => setVeiculoData({ ...veiculoData, valor })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Ano de Fabricação"
            value={veiculoData.anoFabricacao.toString()}
            onChangeText={(anoFabricacao) => setVeiculoData({ ...veiculoData, anoFabricacao })}
            keyboardType="numeric"
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Câmbio"
              value={veiculoData.cambio}
              onChangeText={(cambio) => setVeiculoData({ ...veiculoData, cambio })}
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Carroceria"
              value={veiculoData.carroceria}
              onChangeText={(carroceria) => setVeiculoData({ ...veiculoData, carroceria })}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Km"
              value={veiculoData.km.toString()}
              onChangeText={(km) => setVeiculoData({ ...veiculoData, km })}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Combustível"
              value={veiculoData.combustivel}
              onChangeText={(combustivel) => setVeiculoData({ ...veiculoData, combustivel })}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Cor"
            value={veiculoData.cor}
            onChangeText={(cor) => setVeiculoData({ ...veiculoData, cor })}
          />

          <TextInput
            style={[styles.input, styles.description]}
            placeholder="Descrição do Veículo"
            value={veiculoData.descricao}
            onChangeText={(descricao) => setVeiculoData({ ...veiculoData, descricao })}
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
