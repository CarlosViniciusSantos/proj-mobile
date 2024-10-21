import { View, Text, StyleSheet } from "react-native";

export default function CardFrase() {
    return (
        <View style={styles.comp}>
            <Text style={styles.font}>Melhor App Para Vender</Text>
            <Text style={styles.font}>ou</Text>
            <Text style={styles.font}>Comprar Seu Veículo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    comp: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
        gap: 20
    },
    font: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center'
    },
})