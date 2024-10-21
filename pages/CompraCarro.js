// CompraCarro.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardCarPagamento from '../components/CardCarPagamento';
import CustomModal from '../components/ModalCartao';
import PixModal from '../components/ModalPix';
import BoletoModal from '../components/ModalBoleto';
import { useRoute } from '@react-navigation/native'; // Para pegar os parâmetros passados na navegação

export default function CompraCarro() {
    const route = useRoute(); // Obtém os parâmetros da navegação
    const { veiculo } = route.params; // Pega o objeto veiculo passado na navegação

    const [modalVisiblepix, setModalVisiblePix] = useState(false);
    const [modalVisibleBol, setModalVisibleBol] = useState(false);
    const [modalVisibleCard, setModalVisibleCard] = useState(false);

    const openModalPix = () => {
        setModalVisiblePix(true);
    };
    const openModalBol = () => {
        setModalVisibleBol(true);
    };
    const openModalCard = () => {
        setModalVisibleCard(true);
    };

    const closeModalPix = () => {
        setModalVisiblePix(false);
    };
    const closeModalBol = () => {
        setModalVisibleBol(false);
    };
    const closeModalCard = () => {
        setModalVisibleCard(false);
    };

    return (
        <View style={styles.bg}>
            <NavbarPadrao texto="Finalizando Compra" />
            <View style={styles.container}>
                <Text style={styles.titulo}>Escolha a forma de pagamento</Text>
                {/* Passa os dados do veículo para o CardCarPagamento */}
                {veiculo ? (
                    <CardCarPagamento veiculo={veiculo} />
                ) : (
                    <Text>Carregando dados do veículo...</Text>
                )}
            </View>
            <View style={styles.pagamentos}>
                <TouchableOpacity style={[styles.pag, styles.pix]} onPress={openModalPix}>
                    <Text style={styles.texto}>Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pag, styles.pix]} onPress={openModalBol}>
                    <Text style={styles.texto}>Boleto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.pag, styles.cart]} onPress={openModalCard}>
                    <Text style={styles.texto}>Cartão de Crédito/Débito</Text>
                </TouchableOpacity>
            </View>
            <CustomModal visible={modalVisibleCard} onClose={closeModalCard} />
            <PixModal visible={modalVisiblepix} onClose={closeModalPix} />
            <BoletoModal visible={modalVisibleBol} onClose={closeModalBol} />
        </View>
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
});
