import { View, Text, StyleSheet, Pressable  } from "react-native";
import { Link } from 'expo-router';


export default function CardRegra() {
    
    return (
        <View style={styles.comp}>
            <Text style={styles.font}> Descubra as regras para postar um carro em nosso App! </Text>
            {/* <Link href='../pages/Login.js'> */}
            <Pressable style={styles.button} >
                <Text style={styles.text}>Regras</Text>
            </Pressable>
            {/* </Link> */}
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
        gap:20
    },
    font: {
        fontSize: 18,
        color: 'gray',
        textAlign:'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})