import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardMeuVeiculo from '../components/CardMeuVeiculo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function MeusVeiculos() {

    const navigation = useNavigation()

    const [meusVeiculos, setMeusVeiculos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [userId, setUserId] = useState(null);


    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await AsyncStorage.getItem('id');
                console.log('User ID:', id); // Log para verificar o ID
                if (!id) {
                    throw new Error("Usuário não logado");
                }
                setUserId(id);
            } catch (error) {
                setErro("Erro ao recuperar usuário");
            }
        };

        fetchUserId();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const fetchMeusVeiculos = async () => {
                if (userId) {
                    try {
                        const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos');
                        if (response.ok) {
                            const data = await response.json();
                            // console.log(data); // Verifique a estrutura da resposta da API

                            const veiculosDoUsuario = data.veiculos.filter(veiculo => veiculo.usuarioId === userId);
                            // console.log('Veículos do Usuário:', veiculosDoUsuario); // Verifique os veículos do usuário

                            setMeusVeiculos(veiculosDoUsuario);
                        } else {
                            throw new Error("Erro ao carregar veículos");
                        }
                    } catch (error) {
                        setErro(error.message);
                    } finally {
                        setLoading(false);
                    }
                }
            };

            fetchMeusVeiculos();
        }, [userId])
    )

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Meus Anúncios" />
            <View style={styles.scro}>
                {loading ? (
                    <Text>Carregando...</Text>
                ) : erro ? (
                    <Text style={{ color: 'red' }}>{erro}</Text>
                ) : meusVeiculos.length === 0 ? (
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', gap:50}}>

                        <Text>Nenhum veículo encontrado.</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('CadastrarVeiculo')} style={{backgroundColor:'red', padding:8, borderRadius:10}}>
                            <Text style={{color:'white', fontWeight:'bold'}}>Anunciar um Veículo</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <ScrollView>
                        {meusVeiculos.map(veiculo => (
                            <CardMeuVeiculo key={veiculo.id} {...veiculo} />
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
