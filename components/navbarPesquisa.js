import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NavbarPesquisa() {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Pesquisa</Text>
      </View>

      <View style={styles.horizontalDivider} />
      

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Filtro</Text>
        </TouchableOpacity>
        
        <View style={styles.verticalDivider} />

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Ordenar</Text>
        </TouchableOpacity>

        <View style={styles.verticalDivider} />

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Filtrar</Text>
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
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    marginBottom: 10,
  titleText: {
    fontSize: 18,
    marginLeft: 10,
    paddingTop: 10
  },
  horizontalDivider: {
    height: 0.5,
    backgroundColor: 'black',
    width: '100%',
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
  verticalDivider: {
    width: 0.5,
    height: '100%',
    backgroundColor: 'black',
  },
});
