import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import ExcluirVeiculoModal from '../../components/ModalExcluirVeiculo';

export default function CardMeuVeiculo({ id, marca, modelo, valor, foto, cor, anoFabricacao }) {
  const navigation = useNavigation();

  const [modalVisibleExcluirVeiculo, setModalVisibleExcluirVeiculo] = useState(false);

  const openModalExcluirVeiculo = () => {
    setModalVisibleExcluirVeiculo(true);
  };

  const closeModalExcluirVeiculo = () => {
    setModalVisibleExcluirVeiculo(false);
  };

  return (
    <View style={styles.pad}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={foto ? { uri: foto } : require('../../assets/images/imageCard.png')}
        />
        <View style={styles.infos}>
          <View style={styles.madelo}>
            <Text style={styles.marca}>{marca}</Text>
            <Text style={styles.modelo}> {modelo}</Text>
          </View>
          <Text style={styles.preco}>R$: {valor}</Text>
          <Text style={styles.preco}>Cor: {cor}</Text>
          <Text style={styles.preco}>Ano: {anoFabricacao}</Text>
          <Feather name="trash-2" size={30} color="black" onPress={openModalExcluirVeiculo} />
        </View>
      </View>

      <ExcluirVeiculoModal visible={modalVisibleExcluirVeiculo} onClose={closeModalExcluirVeiculo} />
    </View>

  );
}

const styles = StyleSheet.create({
  pad: {
    paddingVertical: 10,
    marginBottom: 30
  },
  card: {
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  image: {
    width: 150,
    height: 150,
  },
  infos: {
    paddingLeft: 9,
    paddingBottom: 5,
    gap: 5,
    width: '60%',
  },
  madelo: {
    flexDirection: 'row',
  },
  marca: {
    fontWeight: 'bold',
  },
  modelo: {
    fontWeight: 'bold',
    color: 'red',
  },
  adicionais: {
    color: 'red',
  },
  preco: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    padding: 6,
    color: 'white',
  },
  
});
