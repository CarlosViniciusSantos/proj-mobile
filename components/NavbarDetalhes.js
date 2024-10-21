import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavbarDetalhes(props) {
  const navigation = useNavigation();

  // console.log("Props na NavbarDetalhes:", props);

  const handleNavigateToVendedor = () => {
    if (props.vendedor) {
      navigation.navigate('DetalhesVendedor', { usuarioId: props.vendedor });
    } else {
      console.warn("Vendedor não encontrado");
    }
  };

  const handleNavigateToVeiculo = async () => {
    navigation.navigate('Anuncio', { veiculo: props.veiculo });

  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Detalhes do {props.texto}</Text>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToVeiculo}>
          <Text style={styles.navText}>Veículo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={handleNavigateToVendedor}>
          <Text style={styles.navText}>Vendedor</Text>
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
    elevation: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  titleText: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
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
    padding: 15,
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
