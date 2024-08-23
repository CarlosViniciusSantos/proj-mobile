import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Lembre-se de instalar @expo/vector-icons ou react-native-vector-icons

export default function NavbarPesquisa() {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Pesquisa</Text>
      </View>

      {/* Linha separadora */}
      <View style={styles.separator} />

      <View style={styles.navbar}>
        <TouchableOpacity style={[styles.navItem, styles.navItemWithDivider]}>
          <Text style={styles.navText}>Exibir</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={[styles.navItem, styles.navItemWithDivider]}>
          <Text style={styles.navText}>Ordenar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Filtros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navItem: {
    paddingHorizontal: 10,
  },
  navText: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#232323"
  }
});
