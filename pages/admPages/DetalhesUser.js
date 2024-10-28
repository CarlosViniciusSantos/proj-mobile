import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavbarPadrao from '../../components/NavbarPadrao';
import Feather from '@expo/vector-icons/Feather';
import ExcluirModal from '../../components/admComponents/ModalExcluirUsers';
import CardVeiculoUser from '../../components/admComponents/CardVeiculoUser';
import CardComprasUser from '../../components/admComponents/CardComprasUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://pi3-backend-i9l3.onrender.com';

export default function DetalhesUser() {
    const route = useRoute();  
    const { nome, email, telefone, foto, cidade, estado, cpf, usuarioId, isAdmin } = route.params || {};

    const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);
    const [veiculosDoUsuario, setVeiculosDoUsuario] = useState([]);
    const [comprasDoUsuario, setComprasDoUsuario] = useState([]);
    const [loadingVeiculos, setLoadingVeiculos] = useState(true);
    const [loadingCompras, setLoadingCompras] = useState(true);
    const [erro, setErro] = useState(null);

    const openModalExcluir = () => setModalVisibleExcluir(true);
    const closeModalExcluir = () => setModalVisibleExcluir(false);

    // Buscar veículos do usuário
    useEffect(() => {
        const fetchVeiculos = async () => {
            try {
                const response = await fetch(`${baseURL}/veiculos`);
                if (!response.ok) throw new Error("Erro ao carregar veículos");

                const data = await response.json();
                const veiculosUsuario = data.veiculos.filter(veiculo => veiculo.usuarioId === usuarioId);
                setVeiculosDoUsuario(veiculosUsuario);
            } catch (error) {
                setErro(error.message);
            } finally {
                setLoadingVeiculos(false);
            }
        };
        fetchVeiculos();
    }, [usuarioId]);

    // Buscar compras do usuário
    useEffect(() => {
        const fetchComprasDoUsuario = async () => {
            try {
                const userId = await AsyncStorage.getItem('id');
                if (!userId) throw new Error("Usuário não logado");

                const responseCompras = await fetch(`${baseURL}/compra`);
                if (!responseCompras.ok) throw new Error("Erro ao carregar compras");

                const dataCompras = await responseCompras.json();
                const comprasUsuario = dataCompras.Compras.filter(
                    compra => compra.Usuário.ID === usuarioId
                );

                const veiculosIdsComprados = comprasUsuario.map(compra => compra.Veículo.ID);

                const responseVeiculos = await fetch(`${baseURL}/veiculos`);
                if (!responseVeiculos.ok) throw new Error("Erro ao carregar veículos");

                const dataVeiculos = await responseVeiculos.json();
                const veiculosComprados = dataVeiculos.veiculos.filter(veiculo =>
                    veiculosIdsComprados.includes(veiculo.id)
                );

                setComprasDoUsuario(veiculosComprados);
            } catch (error) {
                setErro(error.message);
            } finally {
                setLoadingCompras(false);
            }
        };
        fetchComprasDoUsuario();
    }, [usuarioId]);

    return (
        <ScrollView>
            <NavbarPadrao texto="Detalhes do Usuário" />
            <View style={styles.details1Container}>
                <Image
                    style={styles.image}
                    source={foto ? { uri: foto } : require('../../assets/images/nophoto.jpg')}
                />
                <Text style={styles.name}>Nome: {nome}</Text>
                <Text style={styles.location}>Contato: {telefone}</Text>
                <Text style={styles.location}>Email: {email}</Text>
                <Text style={styles.location}>CPF: {cpf}</Text>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.location}>Cidade: {cidade}</Text>
                        <Text style={styles.location}>Estado: {estado}</Text>
                    </View>
                    <Feather name="trash-2" size={30} color="black" onPress={openModalExcluir} />
                </View>
            </View>

            <ExcluirModal visible={modalVisibleExcluir} onClose={closeModalExcluir} />

            {!isAdmin && (
                <>
                    <Text style={styles.usu}>Anúncios do Usuário</Text>
                    <View style={styles.scro}>
                        {loadingVeiculos ? (
                            <Text>Carregando...</Text>
                        ) : erro ? (
                            <Text style={{ color: 'red' }}>{erro}</Text>
                        ) : veiculosDoUsuario.length === 0 ? (
                            <Text style={{ marginLeft: 10, marginBottom: 30, marginTop: 20 }}>
                                Esse usuário não possuiu nenhum anúncio.
                            </Text>
                        ) : (
                            <ScrollView>
                                {veiculosDoUsuario.map(veiculo => (
                                    <CardVeiculoUser key={veiculo.id} {...veiculo} />
                                ))}
                            </ScrollView>
                        )}
                    </View>

                    <Text style={styles.usu}>Compras do Usuário</Text>
                    <View style={styles.scro}>
                        {loadingCompras ? (
                            <Text>Carregando...</Text>
                        ) : erro ? (
                            <Text style={{ color: 'red' }}>{erro}</Text>
                        ) : comprasDoUsuario.length === 0 ? (
                            <Text style={{ marginLeft: 10, marginBottom: 30, marginTop: 20 }}>
                                Esse usuário não possuiu nenhuma compra.
                            </Text>
                        ) : (
                            <ScrollView>
                                {comprasDoUsuario.map(veiculo => (
                                    <CardComprasUser
                                        key={veiculo.id}
                                        valor={veiculo.valor}
                                        foto={veiculo.foto}
                                        cor={veiculo.cor}
                                        anoFabricacao={veiculo.anoFabricacao}
                                        cidade={veiculo.cidade}
                                    />
                                ))}
                            </ScrollView>
                        )}
                    </View>
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    details1Container: {
        padding: 16,
        borderBottomWidth: 1
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    location: {
        color: '#888',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',  // Adiciona espaçamento entre o texto e o ícone da lixeira
        alignItems: 'center',  // Alinha o conteúdo verticalmente no centro
    },
    usu: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'red'
    },
    scro: {
        borderBottomWidth: 1
    }
});
