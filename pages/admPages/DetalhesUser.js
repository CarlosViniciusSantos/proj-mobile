import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavbarPadrao from '../../components/NavbarPadrao';
import Feather from '@expo/vector-icons/Feather';
import ExcluirModal from '../../components/ModalExcluir';
import CardVeiculoUser from '../admPages/CardVeiculoUser';
import CardComprasUser from '../admPages/CardComprasUser';

export default function DetalhesUser() {

    const route = useRoute();  // Acessa os parâmetros da navegação
    const { nome, email, telefone, foto, cidade, estado, cpf, usuarioId } = route.params || {};  // Inclui usuarioId do card clicado

    const [modalVisibleExcluir, setModalVisibleExcluir] = useState(false);

    const openModalExcluir = () => {
        setModalVisibleExcluir(true);
    };

    const closeModalExcluir = () => {
        setModalVisibleExcluir(false);
    };

    const [veiculosDoUsuario, setVeiculosDoUsuario] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const fetchVeiculos = async () => {
            try {
                const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos');
                if (response.ok) {
                    const data = await response.json();
                    console.log(data); // Verifique a estrutura da resposta da API

                    const veiculosUsuario = data.veiculos.filter(veiculo => veiculo.usuarioId === usuarioId);
                    console.log('Veículos do Usuário:', veiculosUsuario); // Verifique os veículos do usuário clicado

                    setVeiculosDoUsuario(veiculosUsuario);
                } else {
                    throw new Error("Erro ao carregar veículos");
                }
            } catch (error) {
                setErro(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVeiculos();
    }, [usuarioId]);  // Agora o efeito depende do usuarioId passado via rota

    return (
        <ScrollView>

            <NavbarPadrao texto="Detalhes do Usuário" />
            <View style={styles.details1Container}>
                <Image
                    style={styles.image}
                    source={foto ? { uri: foto } : require('../../assets/images/avatar-hidan.jpg')}
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

            <Text style={styles.usu}>Anúncios do Usuário</Text>

            <View style={styles.scro}>
                {loading ? (
                    <Text>Carregando...</Text>
                ) : erro ? (
                    <Text style={{ color: 'red' }}>{erro}</Text>
                ) : veiculosDoUsuario.length === 0 ? (
                    <Text style={{ marginLeft: 10, marginBottom: 30, marginTop: 20 }}>Esse usuário não possuiu nenhum anúncio.</Text>
                ) : (
                    <ScrollView>
                        {veiculosDoUsuario.map(veiculo => (
                            <CardVeiculoUser key={veiculo.id} {...veiculo} />
                        ))}
                    </ScrollView>
                )}
            </View>

            <Text style={styles.usu}>Compras do Usuário</Text>
            
            <CardComprasUser/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    details1Container: {
        padding: 16,
        // backgroundColor: '#FFF',
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
    scro:{
        borderBottomWidth: 1
    }
});
