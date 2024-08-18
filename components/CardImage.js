import { ImageBackground, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const imageCar = { uri: "https://s3-alpha-sig.figma.com/img/a3e0/2abb/88c143ff068b37c9ced62cec12c6f271?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FJLiGbzzg6AG7iOa~zbY6QhYbGGue~bCcBZcl1HdGctQfR7JduHOjBzCp9ZZedn6C09k1RrUhqXJT5DwP6Yk5bGHpxf0IAVwUtdW1d3tKMHmGScCrFCU1wpn3onneUOfXv3u7U3AM0hcYHasTgEMYezYba1go~DpCI1WNa4VdfEVVfxg9QGtbGPzBcSvsKhUo9zo70-ChVaZmXMJl5IuWS0dduGd0MR9Xjt3t3e-INKIsi9w5juFiRhH~CZUi17pSgj9~iAORUxO2TuBra0-7Gyj-Pbc8ZR58Rh~kVJbj~Qv-yVJmlqkOllwP04LrYjn3T49WXpJoCMLkPqRfpQOFg__" }

export default function CardImage() {
    return (
        <View>
            <View style={styles.car}>
                <ImageBackground source={imageCar} style={styles.imageCar}>
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