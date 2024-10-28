import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';

export default function CardMinhasCompras({ valor, foto, cor, anoFabricacao, cidade }) {
    // Formatar o valor em reais
    const valorFormatado = valor ? `R$ ${Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : 'Valor indisponível';

    return (
        <View style={styles.pad}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={foto ? { uri: foto } : require('../assets/images/imageCard.png')}
                />
                <View style={styles.infos}>
                    <Text style={styles.preco}>{valorFormatado}</Text>
                    <Text style={styles.detalhe}>Cor: {cor || 'Indisponível'}</Text>
                    <Text style={styles.detalhe}>Ano: {anoFabricacao || 'Indisponível'}</Text>
                    <Text style={styles.detalhe}>Cidade: {cidade || 'Indisponível'}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pad: {
        paddingVertical: 10,
    },
    card: {
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
        backgroundColor: '#f0f0f0', // Fundo cinza para imagem padrão
    },
    infos: {
        paddingLeft: 9,
        paddingBottom: 5,
        gap: 8,
        width: '60%',
    },
    preco: {
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 4,
    },
    detalhe: {
        fontSize: 14,
        color: '#333',
    },
});
