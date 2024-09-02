import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import NavbarDetalhes from '../components/NavbarDetalhes';
import FooterVendas from '../components/FooterVendas';

export default function CarDetailsPage() {
  // Estado para armazenar os detalhes do veículo
  const [carDetails, setCarDetails] = useState({
    cidade: 'São Paulo, SP',
    anoFabricacao: '2020',
    anoModelo: '2021',
    quilometragem: '15.000 km',
    cambio: 'Automático',
    carroceria: 'SUV',
    combustivel: 'Gasolina',
    cor: 'Preto',
    observacoes: '',
  });

  // Função para atualizar as observações
  const handleObservationChange = (text) => {
    setCarDetails({ ...carDetails, observacoes: text });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavbarDetalhes texto="Anúncio" />

      <View style={styles.imageGallery}>
        <ScrollView horizontal pagingEnabled>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            style={styles.carImage}
          />
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            style={styles.carImage}
          />
          <Image
            source={{ uri: 'https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            style={styles.carImage}
          />
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Cidade:</Text>
          <Text style={styles.detailValue}>{carDetails.cidade}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Ano de Fabricação:</Text>
          <Text style={styles.detailValue}>{carDetails.anoFabricacao}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Ano Modelo:</Text>
          <Text style={styles.detailValue}>{carDetails.anoModelo}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Quilometragem:</Text>
          <Text style={styles.detailValue}>{carDetails.quilometragem}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Câmbio:</Text>
          <Text style={styles.detailValue}>{carDetails.cambio}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Carroceria:</Text>
          <Text style={styles.detailValue}>{carDetails.carroceria}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Combustível:</Text>
          <Text style={styles.detailValue}>{carDetails.combustivel}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Cor:</Text>
          <Text style={styles.detailValue}>{carDetails.cor}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Observações:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Adicione suas observações aqui..."
            multiline
            value={carDetails.observacoes}
            onChangeText={handleObservationChange}
          />
        </View>
      </View>
      <FooterVendas/>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  imageGallery: {
    height: 250,
    marginBottom: 16,
  },
  carImage: {
    width: 350,
    height: 250,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
  },
});

