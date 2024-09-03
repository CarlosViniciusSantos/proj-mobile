import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao'

export default function LocalizacaoCarro() {
  return (
    <View style={styles.container}>
      <NavbarPadrao texto="Vender Carro" />
      <View style={styles.container2}>

        <View style={styles.headerContainer}>
          <Text style={styles.primeira}>Primeira Etapa</Text>
          <Text style={styles.localiza}>Onde se localiza o Carro?</Text>
        </View>

        <View style={styles.formContainer}>
          <View>

          <TextInput style={styles.input} placeholder="CEP" />
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Cidade" />
            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Estado" />
          </View>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.lograd]} placeholder="Logradouro" />
            <TextInput style={[styles.input, styles.num]} placeholder="Número" />
          </View>
          <TextInput style={styles.input} placeholder="Complemento" />
          </View>

          <TouchableOpacity style={styles.proxButton}>
            <Text style={styles.buttonText}>Próxima Etapa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  container2: {
    flex: 1,
    padding: 20,
    position: 'relative'
  },
  headerContainer: {
    marginBottom: 30,
  },
  primeira: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  localiza: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingTop: 50,
    color: 'red'
  },
  formContainer: {
    flex: 1,
    justifyContent:'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  cidadeEstado: {
    width: '48%',
  },
  lograd: {
    width: '70%',
  },
  num: {
    width: '28%',
  },
  proxButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
