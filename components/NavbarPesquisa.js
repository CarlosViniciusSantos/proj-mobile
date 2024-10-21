import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function NavbarPesquisa({ alterarModoExibicao, mostrarFiltros, ordenar }) {
  const navigation = useNavigation();

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Pesquisa</Text>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem} onPress={alterarModoExibicao}>
          <FontAwesome5 name="th-list" size={20} color="black" />
          <Text style={styles.navText}>Exibir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={mostrarFiltros}>
          <FontAwesome6 name="arrow-down-wide-short" size={20} color="black" />
          <Text style={styles.navText}>Filtrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={ordenar}>
          <Ionicons name="filter" size={24} color="black" />
          <Text style={styles.navText}>Ordenar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 20,
    borderColor: 'transparent'
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
    fontWeight: 'bold'
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
    borderBottomWidth: 0,
    padding: 15,
    gap: 6
  },
  navText: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#232323"
  }
});
