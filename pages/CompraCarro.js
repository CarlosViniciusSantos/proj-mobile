import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavbarPadrao from '../components/NavbarPadrao';
import CardCarPagamento from '../components/CardCarPagamento';
import CustomModal from '../components/ModalCartao';
import PixModal from '../components/ModalPix';
import BoletoModal from '../components/ModalBoleto';
import { useRoute, useNavigation } from '@react-navigation/native';

const baseURL = 'https://pi3-backend-i9l3.onrender.com';

export default function CompraCarro() {
    const navigation = useNavigation();
    const route = useRoute();
    const { veiculo } = route.params;

    const [modalVisiblepix, setModalVisiblePix] = useState(false);
    const [modalVisibleBol, setModalVisibleBol] = useState(false);
    const [modalVisibleCard, setModalVisibleCard] = useState(false);
    const [userCredits, setUserCredits] = useState([]);
    const [selectedCreditId, setSelectedCreditId] = useState(null);

    useEffect(() => {
        const fetchUserCredits = async () => {
            const userId = await AsyncStorage.getItem('id');
            try {
                const response = await fetch(`${baseURL}/credit`, { // Rota sem o filtro de usuário
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                const data = await response.json();
    
                if (response.ok && Array.isArray(data.cartoesDeCredito)) {
                    // Filtrando os cartões pelo usuário logado
                    const userCards = data.cartoesDeCredito.filter(card => card.usuarioId === userId);
                    
                    const cardsWithLast4Digits = userCards.map(card => ({
                        ...card,
                        last4Digits: card.numero.slice(-4),
                    }));
    
                    setUserCredits(cardsWithLast4Digits);
                    if (cardsWithLast4Digits.length > 0) setSelectedCreditId(cardsWithLast4Digits[0].id);
                } else {
                    Alert.alert("Erro", "Não foi possível carregar os cartões cadastrados.");
                }
            } catch (error) {
                Alert.alert("Erro", "Falha ao carregar cartões. Tente novamente mais tarde.");
            }
        };
        fetchUserCredits();
    }, []);
    

    const createCompra = async (method) => {
        try {
            const response = await fetch(`${baseURL}/compra`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    veiculoId: veiculo.id,
                    usuarioId: await AsyncStorage.getItem('id'),
                    method,
                }),
            });
            const data = await response.json();
            return data.id;
        } catch (error) {
            console.error("Erro ao criar a compra:", error);
        }
    };

    const processPayment = async (compraId, creditCardId) => {
        try {
            const response = await fetch(`${baseURL}/payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    compraId,
                    creditCardId,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                navigation.navigate('Home');
                Alert.alert("Sucesso", "Compra realizada com sucesso. Agora é só aguardar e o vendedor entrará em contato. Acesse seu email, para mais informações");
            } else {
                Alert.alert("Erro", data.error || "Erro ao processar pagamento.");
            }
        } catch (error) {
            Alert.alert("Erro", "Erro ao processar pagamento.");
        }
    };

    const handleCompra = async () => {
        if (!selectedCreditId) {
            Alert.alert("Erro", "Por favor, selecione um cartão.");
            return;
        }

        const compraId = await createCompra('creditCard');
        if (compraId) {
            await processPayment(compraId, selectedCreditId);
        }
    };

    const handleCardCreation = async (newCardDetails) => {
        const cardWithLast4Digits = {
            ...newCardDetails,
            last4Digits: newCardDetails.numero.slice(-4),
        };

        setUserCredits(prevCredits => [...prevCredits, cardWithLast4Digits]);
        setSelectedCreditId(newCardDetails.id);
    };

    return (
        <ScrollView style={styles.bg}>
            <NavbarPadrao texto="Finalizando Compra" />
            <View style={styles.container}>
                <Text style={styles.titulo}>Escolha a forma de pagamento</Text>
                {veiculo ? (
                    <CardCarPagamento veiculo={veiculo} />
                ) : (
                    <Text>Carregando dados do veículo...</Text>
                )}
            </View>
            <View style={styles.pagamentos}>
                <TouchableOpacity style={[styles.pag, styles.pix]} onPress={() => setModalVisiblePix(true)}>
                    <Text style={styles.texto}>Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pag, styles.pix]} onPress={() => setModalVisibleBol(true)}>
                    <Text style={styles.texto}>Boleto</Text>
                </TouchableOpacity>
                <View style={[styles.pag, styles.cart]}>
                    <Text style={styles.texto}>Ou</Text>
                </View>
            </View>

            {/* Lista de cartões cadastrados */}
            <View style={styles.cardOptions}>
                <Text style={styles.subTitle}>Selecione um cartão (Crédito/Débito):</Text>
                {userCredits.map(credit => (
                    <TouchableOpacity
                        key={credit.id}
                        style={[
                            styles.optionButton,
                            selectedCreditId === credit.id && styles.optionButtonSelected,
                        ]}
                        onPress={() => setSelectedCreditId(credit.id)}
                    >
                        <Text style={styles.optionText}>Cartão com final {credit.last4Digits}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    key="addNewCard"
                    style={[
                        styles.optionButton,
                        selectedCreditId === 'addNewCard' && styles.optionButtonSelected,
                    ]}
                    onPress={() => setModalVisibleCard(true)}
                >
                    <Text style={styles.optionText}>Cadastrar um novo cartão</Text>
                </TouchableOpacity>
            </View>

            <CustomModal
                visible={modalVisibleCard}
                onClose={() => setModalVisibleCard(false)}
                setCardDetails={handleCardCreation}
            />
            <PixModal visible={modalVisiblepix} onClose={() => setModalVisiblePix(false)} />
            <BoletoModal visible={modalVisibleBol} onClose={() => setModalVisibleBol(false)} />

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.buyButton} onPress={handleCompra}>
                    <Text style={styles.buyButtonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#ECECEC',
        flex: 1
    },
    container: {
        padding: 20,
        alignItems: "center"
    },
    titulo: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 5
    },
    pagamentos: {
        width: '100%',
        backgroundColor: 'white',
        elevation: 10
    },
    pag: {
        padding: 10
    },
    texto: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    pix: {
        borderColor: 'lightgray',
        borderBottomWidth: 2
    },
    cardOptions: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 5
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    optionButton: {
        backgroundColor: '#ECECEC',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    optionButtonSelected: {
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
    },
    optionText: {
        fontSize: 16,
        fontWeight:'bold'
    },
    buyButton: {
        backgroundColor: '#ff0000',
        padding: 15, borderRadius: 5,
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 100,
        width: 350
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
});
