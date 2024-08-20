import { StyleSheet, ImageBackground, View, Text } from 'react-native';

import bg from '../assets/Group 26'

export default function Login(){
    return(
        <ImageBackground source={bg}>
            <Text style={styles.texto}>TESTE PARA BG</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    texto:{
        color:'green'
    }
})