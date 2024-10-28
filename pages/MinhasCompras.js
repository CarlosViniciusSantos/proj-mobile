import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardMinhasCompras from '../components/CardMinhasCompras';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const baseURL = 'https://pi3-backend-i9l3.onrender.com';

export default function MinhasCompras() {

    const navigation = useNavigation()
    
    const [minhasCompras, setMinhasCompras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const fetchMinhasCompras = async () => {
            try {
                const userId = await AsyncStorage.getItem('id');
                if (!userId) throw new Error("Usuário não logado");

                // Fetch na rota /compra para obter as compras do usuário logado
                const responseCompras = await fetch(`${baseURL}/compra`);
                if (!responseCompras.ok) throw new Error("Erro ao carregar compras");

                const dataCompras = await responseCompras.json();

                // Filtra as compras do usuário logado
                const comprasDoUsuario = dataCompras.Compras.filter(
                    compra => compra.Usuário.ID === userId
                );

                // Obter IDs dos veículos comprados pelo usuário
                const veiculosIdsComprados = comprasDoUsuario.map(compra => compra.Veículo.ID);

                // Fetch na rota /veiculos para obter detalhes de todos os veículos
                const responseVeiculos = await fetch(`${baseURL}/veiculos`);
                if (!responseVeiculos.ok) throw new Error("Erro ao carregar veículos");

                const dataVeiculos = await responseVeiculos.json();

                // Filtrar apenas os veículos que estão na lista de compras do usuário
                const veiculosComprados = dataVeiculos.veiculos.filter(veiculo =>
                    veiculosIdsComprados.includes(veiculo.id)
                );

                setMinhasCompras(veiculosComprados);
            } catch (error) {
                setErro(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMinhasCompras();
    }, []);

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Minhas Compras" />
            <View style={styles.scro}>
                {loading ? (
                    <Text>Carregando...</Text>
                ) : erro ? (
                    <Text style={{ color: 'red' }}>{erro}</Text>
                ) : minhasCompras.length === 0 ? (
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', gap:50}}>

                        <Text>Nenhuma compra realizada.</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Catalogo')} style={{backgroundColor:'red', padding:8, borderRadius:10}}>
                            <Text style={{color:'white', fontWeight:'bold'}}>Comprar um Veículo</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <ScrollView>
                        {minhasCompras.map(veiculo => (
                            <CardMinhasCompras
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scro: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ECECEC',
    },
});
