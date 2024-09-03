import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function AtualizarDadosCarro() {
  return (
    <View style={styles.container}>
      <NavbarPadrao texto="Atualizar Meus Anúncios" />
      <View style={styles.container2}>
        <ScrollView style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Onde se Localiza o Carro?</Text>

          <TextInput style={styles.input} placeholder="CEP" />

          <View style={styles.row}>
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Cidade" />
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Estado" />
          </View>

          <View style={styles.row}>
            <TextInput style={[styles.input, styles.largeInput]} placeholder="Logradouro" />
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Número" />
          </View>

          <TextInput style={styles.input} placeholder="Complemento" />

          <Text style={styles.sectionTitle}>Fotos</Text>
          <View style={styles.imageRow}>
            <MaterialCommunityIcons name="image-plus" size={50} color="red" />
            <MaterialCommunityIcons name="image-plus" size={50} color="red" />
            <MaterialCommunityIcons name="image-plus" size={50} color="red" />
            <MaterialCommunityIcons name="image-plus" size={50} color="red" />
            <MaterialCommunityIcons name="image-plus" size={50} color="red" />
            <MaterialCommunityIcons name="image-plus" size={50} color="red" />
          </View>

          <Text style={styles.sectionTitle}>Digite Informações do Carro</Text>

          <TextInput style={styles.input} placeholder="Marca" />
          <TextInput style={styles.input} placeholder="Modelo" />
          <TextInput style={styles.input} placeholder="Informações do carro" />
          <TextInput style={styles.input} placeholder="Valor" />

          <View style={styles.row}>
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Ano de Fabricação" />
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Câmbio" />
          </View>

          <View style={styles.row}>
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Ano de Modelo" />
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Carroceria" />
          </View>

          <View style={styles.row}>
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Km" />
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Combustível" />
          </View>

          <TextInput style={styles.input} placeholder="Cor" />
          <TextInput style={[styles.input, styles.description]} placeholder="Descrição do Veículo" multiline />

          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    padding: 20
  },
  backButton: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  formContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInput: {
    width: '48%',
  },
  largeInput: {
    width: '48%',
  },
  description: {
    height: 80,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 60,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
