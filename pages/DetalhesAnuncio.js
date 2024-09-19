import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import NavbarDetalhes from '../components/NavbarDetalhes';
import FooterVendas from '../components/FooterVendas';

const { width } = Dimensions.get('window')


export default function CarDetailsPage() {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };
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
    observacoes: 'Tô vendendo meu Supra, um verdadeiro monstro das ruas. Pra quem manja, já sabe: é aquele clássico JDM com o lendário motor 2JZ, tração traseira e pronto pra despejar potência. O carro tá liso, sem detalhe, sempre bem cuidado e com tudo em cima nas manutenções. Se você curte projetinho, esse aqui é um prato cheio pra mod, aceita personalização numa boa, tanto de motor quanto estética. É o tipo de máquina que quando para, todo mundo vira o pescoço, e quando acelera, não tem pra ninguém. Ideal pra quem quer dar aquele rolê de responsa ou até mesmo colar nos eventos e arrancar suspiro da galera. Se você tá na pegada de pegar um JDM raiz, com história, potência e ainda com potencial de valorização, pode acreditar: esse Supra é o rolê certo!',
  });

  // Função para atualizar as observações
  const handleObservationChange = (text) => {
    setCarDetails({ ...carDetails, observacoes: text });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavbarDetalhes texto="Anúncio" />

      <View style={styles.imageGallery}>
        <ScrollView horizontal pagingEnabled >
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
        <View style={styles.madelo}>
          <Text style={styles.detailTitle}>Toyota </Text>
          <Text style={styles.modelo}>Supra</Text>
        </View>
        <View style={styles.preco}>
          <Text style={styles.preco}>R$1.000.000 </Text>
        </View>
        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Cidade:</Text>
            <Text style={styles.detailValue}>{carDetails.cidade}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Ano de Fabricação:</Text>
            <Text style={styles.detailValue}>{carDetails.anoFabricacao}</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Ano Modelo:</Text>
            <Text style={styles.detailValue}>{carDetails.anoModelo}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Quilometragem:</Text>
            <Text style={styles.detailValue}>{carDetails.quilometragem}</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Câmbio:</Text>
            <Text style={styles.detailValue}>{carDetails.cambio}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Carroceria:</Text>
            <Text style={styles.detailValue}>{carDetails.carroceria}</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Combustível:</Text>
            <Text style={styles.detailValue}>{carDetails.combustivel}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Cor:</Text>
            <Text style={styles.detailValue}>{carDetails.cor}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.detailTitle}>Observações:</Text>
          <Text style={styles.obs}>{expanded ? carDetails.observacoes : `${carDetails.observacoes.substring(0, 100)}...`}</Text>
          <TouchableOpacity onPress={toggleText}>
            <Text style={styles.ler}>{expanded ? "Ler menos" : "Ler mais"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FooterVendas />
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5'
  },
  imageGallery: {
    height: 300,
    // marginBottom: 16,
    width: 'auto'
  },
  carImage: {
    width,
    height: 300,
  },
  detailsContainer: {
    gap: 2,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  detailItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
    width: '50%',
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    // width: '50%'
  },
  madelo: {
    flexDirection: 'row'
  },
  modelo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  preco: {
    fontSize: 28,
    fontWeight: '900'
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
  obs: {

  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ler:{
    color:'red',
    fontWeight:'900'
  }
});

