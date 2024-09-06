import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
      {/* <View style={styles.separator} /> */}

      <View style={styles.navbar}>
        <TouchableOpacity style={[styles.navItem]}>
          <FontAwesome5 name="th-list" size={20} color="black" />
          <Text style={styles.navText}>Exibir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem]}>
          <FontAwesome6 name="arrow-down-wide-short" size={20} color="black" />
          <Text style={styles.navText}>Ordenar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="filter" size={24} color="black" />
          <Text style={styles.navText}>Filtrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#fff',
    borderTopWidth:20,
    borderColor: 'transparent',
    elevation:30
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
    fontWeight:'bold'
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: 10,
    // borderWidth: 0.5
  },
  navItem: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth:0,
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
