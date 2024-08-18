import { ImageBackground, View, Text, StyleSheet } from "react-native";
import CardAccount from "./CardAccount";

const imageCar = {uri: "https://s3-alpha-sig.figma.com/img/a3e0/2abb/88c143ff068b37c9ced62cec12c6f271?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FJLiGbzzg6AG7iOa~zbY6QhYbGGue~bCcBZcl1HdGctQfR7JduHOjBzCp9ZZedn6C09k1RrUhqXJT5DwP6Yk5bGHpxf0IAVwUtdW1d3tKMHmGScCrFCU1wpn3onneUOfXv3u7U3AM0hcYHasTgEMYezYba1go~DpCI1WNa4VdfEVVfxg9QGtbGPzBcSvsKhUo9zo70-ChVaZmXMJl5IuWS0dduGd0MR9Xjt3t3e-INKIsi9w5juFiRhH~CZUi17pSgj9~iAORUxO2TuBra0-7Gyj-Pbc8ZR58Rh~kVJbj~Qv-yVJmlqkOllwP04LrYjn3T49WXpJoCMLkPqRfpQOFg__"}

export default function Header() {
    return (
        <View style={styles.content}>
            {/* CARDACCOUNT ADICIONADO APENAS PARA A VISUALIZAÇÃO COMPLETA DO APP
             MEXER APENAS NA SUA PARTE, CASO ALGO ESTEJA ATRAPALHANDO SUA PARTE, AVISE AO AMIGUINHO QUE A PARTE DELE ESTA ATRAPALHANDO, PARA UMA MANUTENÇÃO MELHOR 
             OBRIGADO! */}
            <View style={styles.car}>
                <ImageBackground source={imageCar} style={styles.imageCar}>

                    <Text>VENDA E COMPRE CARROS DE FORMA SEGURA</Text>

                </ImageBackground>
            </View>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#dbdbdb',
        // padding: 15,
        gap: 20
    },
    imageCar: {
        flex:1,
        resizeMode:'cover',
        justifyContent: 'center',
        alignItems:'center',
        padding:140
    },
    car:{
        paddingTop:35,
        backgroundColor:'white'
    }
})