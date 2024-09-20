import { ImageBackground, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import imageCar from '../assets/images/imageCar.png'

export default function CardImage() {
    return (
        <View>
            <View style={styles.car}>
                <ImageBackground source={require('../assets/images/imageCar.png')} style={styles.imageCar}>
                </ImageBackground>
                <LinearGradient
                    colors={['#00000000', '#00000000', 'black', 'black']}
                    style={styles.frase}>
                    <Text style={styles.venda}>VENDA E COMPRE CARROS DE FORMA SEGURA</Text>
                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageCar: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 170,
        borderBottomWidth: 180
    },
    car: {
        paddingTop: 35,
        backgroundColor: 'white'
    },
    venda: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    frase: {
        position: 'absolute',
        color: 'white',
        padding: 40,
        paddingTop: 450,
        right: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },
})