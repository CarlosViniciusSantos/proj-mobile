import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'

export default function CardCarPagamento() {
    return (
        <View style={styles.pad}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/imageCard.png')}
                />
                <View style={styles.infos}>


                    <View style={styles.madelo}>
                        <Text style={styles.marca}>Dodge</Text>
                        <Text style={styles.modelo}> Charger</Text>
                    </View>

                    <Text style={styles.preco}>R$ 300.000,00</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pad: {
        paddingVertical: 10
    },
    card: {
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 150,
        height: 150,
    },
    infos: {
        paddingLeft: 9,
        paddingBottom: 5,
        gap:16,
        width:'60%'
    },
    madelo: {
        flexDirection: 'row'
    },
    marca: {
        fontWeight: 'bold'
    },
    modelo: {
        fontWeight: 'bold',
        color: 'red'
    },
    preco: {
        fontWeight: 'bold'
    }
})