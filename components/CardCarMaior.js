import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'

export default function CardCarMaior() {
    return (
        <View style={styles.pad}>
            <View style={styles.card}>
            <Image
                style={styles.image}
                source='https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
            <View style={styles.info1}>
                <View style={styles.madelo}>
                    <Text style={styles.marca}>Toyota</Text>
                    <Text style={styles.modelo}> Supra</Text>
                </View>
                <Text style={styles.adicionais}>Transmissão automática, motor i6, corre pra k7, bonito, bem tratado, sem problemas, praticamente novo</Text>
                <Text style={styles.preco}>R$ 300.000,00</Text>
            </View>
            <View style={styles.info2}>

                <View style={styles.line1}>
                    <Text style={styles.text}>KM: 74.587</Text>
                    <Text style={styles.text}>Ano: 1993</Text>
                    <Text style={styles.text}>Cor: cinza prata</Text>
                </View>
                <View>
                    <Text style={styles.text}>Caraguatauba-SP</Text>
                </View>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pad:{
        paddingVertical:15
    },
    card: {
        elevation:10,
        borderRadius: 8,
        backgroundColor:'white',
    },
    image: {
        width: '100%',
        height: 220,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    info1: {
        padding: 5,
        gap: 7
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
    adicionais: {
        color: 'gray'
    },
    preco: {
        fontWeight: 'bold'
    },
    info2:{
        padding:5,
        gap:7
    },
    line1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
        borderBottomWidth:0.3,
        borderBottomColor:'lightgray'
    },
    text: {
        color: 'gray',
        fontSize: 12,
        padding:3
    }

})