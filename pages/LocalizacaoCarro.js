import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function LocalizacaoCarro() {
  return (
    <View style={styles.container}>
        <MaterialIcons name="keyboard-backspace" size={24} color="black" style={styles.voltar} />
        <Text style={styles.voltarText}> Vender Carro</Text>

      <View style={styles.headerContainer}>
        <Text style={styles.primeira}>Primeira Etapa</Text>
        <Text style={styles.localiza}>Onde se localiza o Carro?</Text>
      </View>

      <View style={styles.formContainer}>
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

      <Pressable style={styles.proxButton}>
        <Text style={styles.buttonText}>Próxima Etapa</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    position: 'relative'
  },
  voltarText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    position: 'absolute',
    top: 30,
    left: 50
  },
  headerContainer: {
    marginBottom: 30,
  },
  primeira: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 80
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
  },
  voltar: {
    position: 'absolute',
    top: 31,
    left: 15
  }
});
