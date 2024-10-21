import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FooterVendas from '../components/FooterVendas';
import NavbarPadrao from '../components/NavbarPadrao';

const { width } = Dimensions.get('window');

export default function DetalhesAnuncio() {
  const route = useRoute();
  const { veiculo, usuarioId } = route.params;
  console.log('abc',useRoute())

  const [expanded, setExpanded] = useState(false);
  const [vendedor, setVendedor] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const [carDetails, setCarDetails] = useState(veiculo || {
    cidade: 'São Paulo, SP',
    anoFabricacao: '2020',
    anoModelo: '2021',
    quilometragem: '15.000 km',
    cambio: 'Automático',
    carroceria: 'SUV',
    combustivel: 'Gasolina',
    cor: 'Preto',
    observacoes: 'Tô vendendo meu Supra...',
  });

  useEffect(() => {
    const fetchVendedor = async () => {
      try {
        const response = await fetch(`https://pi3-backend-i9l3.onrender.com/usuarios/${veiculo.usuarioId}`);
        const data = await response.json();
        console.log(data)
        setVendedor(data);
      } catch (error) {
        console.error('Erro ao buscar dados do vendedor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendedor();
  }, [usuarioId]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  console.log(veiculo.usuarioId.toString())
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavbarPadrao texto="Detalhes do Anúncio"/>

      <View style={styles.imageGallery}>
        <ScrollView horizontal pagingEnabled>
          {/* Verifica se 'veiculo.foto' existe */}
          {veiculo?.foto ? (
            <Image
              source={{ uri: veiculo.foto }}
              style={styles.carImage}
            />
          ) : (
            <Image
              // source={{ uri: veiculo.veiculo }}
              style={styles.carImage}
            />
          )}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.madelo}>
          <Text style={styles.detailTitle}>{carDetails.marca} </Text>
          <Text style={styles.modelo}>{carDetails.modelo}</Text>
        </View>
        <View style={styles.preco}>
          <Text style={styles.preco}>R$ {carDetails.valor}</Text>
        </View>
        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Cidade:</Text>
            <Text style={styles.detailValue}>{carDetails.cidade}-{carDetails.estado}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Ano de Fabricação:</Text>
            <Text style={styles.detailValue}>{carDetails.anoFabricacao}</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Logradouro:</Text>
            <Text style={styles.detailValue}>{carDetails.logradouro}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Quilometragem:</Text>
            <Text style={styles.detailValue}>{carDetails.km}</Text>
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
          <Text style={styles.obs}>
            {expanded
              ? carDetails.descricao || ''
              : (carDetails.descricao&& <Text>{carDetails.descricao.substring(0, 100)}...</Text>) || ''}
          </Text>
          <TouchableOpacity onPress={toggleText}>
            <Text style={styles.ler}>{expanded ? "Ler menos" : "Ler mais"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.details1Container}>
        <Image
          style={styles.image}
          source={vendedor?.foto ? { uri: vendedor.foto } : require('../assets/images/avatar-hidan.jpg')}
        />
        <Text style={styles.name}>Vendedor: {vendedor?.nome}</Text>
        <Text style={styles.location}>Contato: {vendedor?.telefone}</Text>
        <Text style={styles.location}>{vendedor?.email}</Text>
      </View>

      <FooterVendas teste={true} veiculo={veiculo} />
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
    borderBottomWidth: 1,
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
  ler: {
    color: 'red',
    fontWeight: '900',
  },
  details1Container: {
    padding: 16,
    backgroundColor: '#FFF',
    marginTop: 0,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    color: '#888',
  },
});

