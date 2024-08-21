import { StyleSheet, ImageBackground, View, Text } from 'react-native';

// import bg from '../assets/Bg.svg'

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/Bg.png')}>
                <Text style={styles.texto}>TESTE PARA BG</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white'
    },
    texto: {
        color: 'green'
    },
    bg: {
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop:90,
        paddingBottom:100,
        borderTopWidth:210,
        borderTopColor:'white'
    }
})