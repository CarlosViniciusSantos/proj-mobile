import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import NavbarPesquisa from '../components/NavbarPesquisa';
import CardCarMaior from '../components/CardCarMaior';
import CardCarMenor from '../components/CardCarMenor';

export default function CatalogoCarros() {
    const [modoExibicao, setModoExibicao] = useState(true);
    const [veiculos, setVeiculos] = useState([]);
    const [filtros, setFiltros] = useState({
        marca: '',
        modelo: '',
        valor: '',
        km: '',
        anoFabricacao: '',
        cor: '',
        cidade: '',
        estado: ''
    });
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [ordemInvertida, setOrdemInvertida] = useState(false);

    // useFocusEffect para garantir que os veículos sejam recarregados ao ganhar foco
    useFocusEffect(
        React.useCallback(() => {
            const getVeiculos = async () => {
                const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos');
                if (response.ok) {
                    const data = await response.json();
                    setVeiculos(data.veiculos);
                } else {
                    console.log("Erro ao carregar veículos");
                }
            };
            getVeiculos();
        }, [])
    );

    const filtrarVeiculos = () => {
        return veiculos.filter(veiculo => {
            const condicoes = [
                !filtros.marca || veiculo.marca.toLowerCase().includes(filtros.marca.toLowerCase()),
                !filtros.modelo || veiculo.modelo.toLowerCase().includes(filtros.modelo.toLowerCase()),
                !filtros.valor || parseFloat(veiculo.valor) <= parseFloat(filtros.valor),
                !filtros.km || parseFloat(veiculo.km) <= parseFloat(filtros.km),
                !filtros.anoFabricacao || veiculo.anoFabricacao.toString() === filtros.anoFabricacao,
                !filtros.cor || veiculo.cor.toLowerCase().includes(filtros.cor.toLowerCase()),
                !filtros.cidade || veiculo.cidade.toLowerCase().includes(filtros.cidade.toLowerCase()),
                !filtros.estado || veiculo.estado.toLowerCase().includes(filtros.estado.toLowerCase())
            ];
            return condicoes.every(Boolean);
        });
    };

    const veiculosFiltrados = filtrarVeiculos();
    const veiculosOrdenados = ordemInvertida ? veiculosFiltrados.slice().reverse() : veiculosFiltrados;

    const handleOrdenar = () => {
        setOrdemInvertida(!ordemInvertida);
    };

    return (
        <View style={styles.container}>
            <NavbarPesquisa 
                alterarModoExibicao={() => setModoExibicao(!modoExibicao)} 
                mostrarFiltros={() => setMostrarFiltros(!mostrarFiltros)} 
                ordenar={handleOrdenar}
            />

            {mostrarFiltros && (
                <View style={styles.sidebar}>
                    <Text style={styles.filterTitle}>Filtros</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Marca"
                        value={filtros.marca}
                        onChangeText={text => setFiltros({ ...filtros, marca: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Modelo"
                        value={filtros.modelo}
                        onChangeText={text => setFiltros({ ...filtros, modelo: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Valor Máximo"
                        value={filtros.valor}
                        onChangeText={text => setFiltros({ ...filtros, valor: text })}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Km Máximo"
                        value={filtros.km}
                        onChangeText={text => setFiltros({ ...filtros, km: text })}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ano de Fabricação"
                        value={filtros.anoFabricacao}
                        onChangeText={text => setFiltros({ ...filtros, anoFabricacao: text })}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cor"
                        value={filtros.cor}
                        onChangeText={text => setFiltros({ ...filtros, cor: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                        value={filtros.cidade}
                        onChangeText={text => setFiltros({ ...filtros, cidade: text })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                        value={filtros.estado}
                        onChangeText={text => setFiltros({ ...filtros, estado: text })}
                    />
                </View>
            )}

            <View style={styles.scro}>
                <ScrollView >
                    {veiculos.length === 0 && <Text>Carregando...</Text>}
                    {veiculosOrdenados.map(veiculo =>
                        modoExibicao ? (
                            <CardCarMaior
                                key={veiculo.id}
                                {...veiculo}
                            />
                        ) : (
                            <CardCarMenor
                                key={veiculo.id}
                                {...veiculo}
                            />
                        )
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    sidebar: {
        padding: 10,
        backgroundColor: '#ECECEC',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    filterTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    scro: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    }
});
