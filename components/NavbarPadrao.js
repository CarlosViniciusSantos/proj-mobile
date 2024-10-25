import { useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ExcluirVeiculoModal from '../components/admComponents/ModalExcluirVeiculo';

export default function NavbarPadrao({ texto, trash }) {

  const navigation = useNavigation();

  const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);

  const openModalExcluir = () => {
    setModalVisibleExcluir(true);
  };

  const closeModalExcluir = () => {
    setModalVisibleExcluir(false);
  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.titleText}>{texto}</Text>
        {trash === true ?
          <TouchableOpacity onPress={openModalExcluir} style={styles.trash}>
            <Ionicons name="trash" size={30} color="black" />
          </TouchableOpacity> : ''
        }
      </View>
      <ExcluirVeiculoModal visible={modalVisibleExcluir} onClose={closeModalExcluir} />

    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 20,
    borderColor: 'transparent',
    elevation: 10
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
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
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
    gap: 6
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: "#232323"
  },
  trash: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
