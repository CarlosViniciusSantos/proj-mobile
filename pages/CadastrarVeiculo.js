import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handlerCreateCar = async () => {
    const id = await AsyncStorage.getItem('id');

    const veiculo = {
      cep: txtCep,
      cidade: txtCidade,
      estado: txtEstado,
      logradouro: txtLogradouro,
      numero: txtNumero,
      complemento: txtComplemento,
      marca: txtMarca,
      modelo: txtModelo,
      valor: parseInt(txtValor),
      anoFabricacao: parseInt(txtAnoFabricacao),
      cambio: txtCambio,
      carroceria: txtCarroceria,
      combustivel: txtCombustivel,
      km: parseInt(txtKm),
      cor: txtCor,
      descricao: txtDescricao,
      usuarioId: parseInt(id),
      foto: "https://foto.png"
    };

    try {
      const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(veiculo)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigation.navigate('Home');
      } else {
        const responseBody = await response.text(); // Ler o corpo da resposta
        console.error("Erro ao carregar carros:", response.status, responseBody);
      }
    } catch (error) {
      console.error("Erro ao registrar carro:", error);
    }
  }

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
});
