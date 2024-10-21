import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardMeuVeiculo from '../components/CardMeuVeiculo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function MeusVeiculos() {
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
                            console.log(data); // Verifique a estrutura da resposta da API

                            const veiculosDoUsuario = data.veiculos.filter(veiculo => veiculo.usuarioId === userId);
                            console.log('Veículos do Usuário:', veiculosDoUsuario); // Verifique os veículos do usuário
                            
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
                    <Text>Nenhum veículo encontrado.</Text>
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
