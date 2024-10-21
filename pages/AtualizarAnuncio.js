import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para carregar os dados do veículo existente
const carregarDadosVeiculo = async (veiculoId, setVeiculoData, setErro) => {
  try {
      const response = await fetch(`https://pi3-backend-i9l3.onrender.com/veiculos/${veiculoId}`);
      if (response.ok) {
          const data = await response.json();
          console.log("Dados do veículo carregados:", data);
          setVeiculoData(data.veiculo); // Apenas os dados do veículo
      } else {
          throw new Error('Erro ao carregar os dados do veículo');
      }
  } catch (error) {
      setErro(error.message);
  }
};

export default function AtualizarDadosCarro() {
    const navigation = useNavigation();
    const route = useRoute();
    const { veiculoId } = route.params; // Pegando o id do veículo a partir da rota

    const [veiculoData, setVeiculoData] = useState({
        cep: '',
        cidade: '',
        estado: '',
        logradouro: '',
        numero: '',
        complemento: '',
        marca: '',
        modelo: '',
        valor: '',
        anoFabricacao: '',
        cambio: '',
        carroceria: '',
        combustivel: '',
        km: '',
        cor: '',
        descricao: '',
    });
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(null);
    const [usuarioId, setUsuarioId] = useState(null); // Estado para armazenar o usuarioId

    // Carregar o usuarioId e os dados do veículo
    useEffect(() => {
        const loadUsuarioId = async () => {
            const id = await AsyncStorage.getItem('id');
            setUsuarioId(id); // Salva o usuarioId como string
        };

        if (veiculoId) {
            carregarDadosVeiculo(veiculoId, setVeiculoData, setErro);
        }

        loadUsuarioId(); // Carrega o usuarioId ao montar o componente
    }, [veiculoId]);

    const handleUpdateCar = async () => {
      if (!usuarioId) {
          Alert.alert('Erro', 'Erro ao recuperar o usuário. Faça login novamente.');
          return;
      }

      const veiculoAtualizado = {
          ...veiculoData,
          valor: parseFloat(veiculoData.valor),
          km: parseFloat(veiculoData.km),
          usuarioId: usuarioId.toString(),  // Certifique-se de que usuarioId está em formato de string
      };

      setLoading(true);
      try {
          const response = await fetch(`https://pi3-backend-i9l3.onrender.com/veiculos/${veiculoId.toString()}`, {  // Certifique-se de que o veiculoId seja string
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  data: veiculoAtualizado,  // Aqui estão os dados que queremos atualizar
                  where: { id: veiculoId.toString() },  // O ID vai apenas no campo `where`
              }),
          });

          if (response.ok) {
              const data = await response.json();
              console.log(data);
              Alert.alert('Sucesso', 'Anúncio atualizado com sucesso!');
              navigation.navigate('MeusVeiculos');
          } else {
              const responseBody = await response.text(); // Ler o corpo da resposta
              console.error("Erro ao atualizar o veículo:", response.status, responseBody);
              Alert.alert('Erro', 'Erro ao atualizar veículo. Verifique os dados e tente novamente.');
          }
      } catch (error) {
          console.error("Erro ao atualizar o veículo:", error);
          Alert.alert('Erro', 'Ocorreu um erro ao atualizar o veículo. Tente novamente.');
      } finally {
          setLoading(false);
      }
  };

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Atualizar Meus Anúncios" />
            <View style={styles.container2}>
                <ScrollView style={styles.formContainer}>
                    {veiculoData.marca ? ( // Renderiza apenas se os dados do veículo estiverem carregados
                        <>
                            <Text style={styles.sectionTitle}>Onde se Localiza o Carro?</Text>

                            <TextInput
                                style={styles.input}
                                placeholder="CEP"
                                value={veiculoData.cep ?? ''} // Garantindo que não seja undefined
                                onChangeText={cep => setVeiculoData({ ...veiculoData, cep })}
                            />

                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.input, styles.smallInput]}
                                    placeholder="Cidade"
                                    value={veiculoData.cidade ?? ''} // Garantindo que não seja undefined
                                    onChangeText={cidade => setVeiculoData({ ...veiculoData, cidade })}
                                />
                                <TextInput
                                    style={[styles.input, styles.smallInput]}
                                    placeholder="Estado"
                                    value={veiculoData.estado ?? ''} // Garantindo que não seja undefined
                                    onChangeText={estado => setVeiculoData({ ...veiculoData, estado })}
                                />
                            </View>

                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.input, styles.largeInput]}
                                    placeholder="Logradouro"
                                    value={veiculoData.logradouro ?? ''} // Garantindo que não seja undefined
                                    onChangeText={logradouro => setVeiculoData({ ...veiculoData, logradouro })}
                                />
                                <TextInput
                                    style={[styles.input, styles.smallInput]}
                                    placeholder="Número"
                                    value={veiculoData.numero ?? ''} // Garantindo que não seja undefined
                                    onChangeText={numero => setVeiculoData({ ...veiculoData, numero })}
                                />
                            </View>

                            <TextInput
                                style={styles.input}
                                placeholder="Complemento"
                                value={veiculoData.complemento ?? ''} // Garantindo que não seja undefined
                                onChangeText={complemento => setVeiculoData({ ...veiculoData, complemento })}
                            />

                            <Text style={styles.sectionTitle}>Digite Informações do Carro</Text>

                            <TextInput
                                style={styles.input}
                                placeholder="Marca"
                                value={veiculoData.marca ?? ''} // Garantindo que não seja undefined
                                onChangeText={marca => setVeiculoData({ ...veiculoData, marca })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Modelo"
                                value={veiculoData.modelo ?? ''} // Garantindo que não seja undefined
                                onChangeText={modelo => setVeiculoData({ ...veiculoData, modelo })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Valor"
                                value={(veiculoData.valor ?? '').toString()} // Certifique-se de que seja string
                                onChangeText={valor => setVeiculoData({ ...veiculoData, valor })}
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Ano de Fabricação"
                                value={(veiculoData.anoFabricacao ?? '').toString()} // Certifique-se de que seja string
                                onChangeText={anoFabricacao => setVeiculoData({ ...veiculoData, anoFabricacao })}
                                keyboardType="numeric"
                            />

                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.input, styles.smallInput]}
                                    placeholder="Câmbio"
                                    value={veiculoData.cambio ?? ''} // Garantindo que não seja undefined
                                    onChangeText={cambio => setVeiculoData({ ...veiculoData, cambio })}
                                />
                                <TextInput
                                    style={[styles.input, styles.smallInput]}
                                    placeholder="Carroceria"
                                    value={veiculoData.carroceria ?? ''} // Garantindo que não seja undefined
                                    onChangeText={carroceria => setVeiculoData({ ...veiculoData, carroceria })}
                                />
                            </View>

                            <View style={styles.row}>
                                <TextInput
                                    style={[styles.input, styles.smallInput]}
                                    placeholder="Km"
                                    value={(veiculoData.km ?? '').toString()} // Certifique-se de que seja string
                                    onChangeText={km => setVeiculoData({ ...veiculoData, km })}
                                    keyboardType="numeric"
                                />
                                <TextInput
                                    style={[styles.input, styles.smallInput]}
                                    placeholder="Combustível"
                                    value={veiculoData.combustivel ?? ''} // Garantindo que não seja undefined
                                    onChangeText={combustivel => setVeiculoData({ ...veiculoData, combustivel })}
                                />
                            </View>

                            <TextInput
                                style={styles.input}
                                placeholder="Cor"
                                value={veiculoData.cor ?? ''} // Garantindo que não seja undefined
                                onChangeText={cor => setVeiculoData({ ...veiculoData, cor })}
                            />

                            <TextInput
                                style={[styles.input, styles.description]}
                                placeholder="Descrição do Veículo"
                                value={veiculoData.descricao ?? ''} // Garantindo que não seja undefined
                                onChangeText={descricao => setVeiculoData({ ...veiculoData, descricao })}
                                multiline
                            />

                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={handleUpdateCar}
                                disabled={loading}
                            >
                                {loading ? (
                                    <Text style={styles.confirmButtonText}>Atualizando...</Text>
                                ) : (
                                    <Text style={styles.confirmButtonText}>Confirmar</Text>
                                )}
                            </TouchableOpacity>
                        </>
                    ) : (
                        <Text>Carregando os dados do veículo...</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}
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
