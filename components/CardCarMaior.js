import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

export default function CardCarMaior(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.pad}
      onPress={() => navigation.navigate('Anuncio', { veiculo: props })}
    >
      <View style={styles.card}>
        {props.foto ? (
          <Image
            style={styles.image}
            source={props.foto}
          />
        ) : (
          <Image
            style={styles.image}
          // source={require('../assets/placeholder_image.png')} 
          />
        )}

        <View style={styles.info1}>
          <View style={styles.madelo}>
            <Text style={styles.marca}>{props.marca}</Text>
            <Text style={styles.modelo}> {props.modelo}</Text>
          </View>
          <Text style={styles.adicionais}>{props.descricao}</Text>
          <Text style={styles.preco}>R$ {props.valor}</Text>
        </View>
        <View style={styles.info2}>
          <View style={styles.line1}>
            <Text style={styles.text}>KM: {props.km}</Text>
            <Text style={styles.text}>Ano: {props.anoFabricacao}</Text>
            <Text style={styles.text}>Cor: {props.cor}</Text>
          </View>
          <View>
            <Text style={styles.text}>{props.cidade}-{props.estado}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pad: {
    paddingVertical: 15
  },
  card: {
    elevation: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  info1: {
    padding: 5,
    gap: 7
  },
  madelo: {
    flexDirection: 'row'
  },
  marca: {
    fontWeight: 'bold'
  },
  modelo: {
    fontWeight: 'bold',
    color: 'red'
  },
  adicionais: {
    color: 'gray'
  },
  preco: {
    fontWeight: 'bold'
  },
  info2: {
    padding: 5,
    gap: 7
  },
  line1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
    borderBottomWidth: 0.3,
    borderBottomColor: 'lightgray'
  },
  text: {
    color: 'gray',
    fontSize: 12,
    padding: 3
  }

})