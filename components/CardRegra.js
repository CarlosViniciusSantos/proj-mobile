import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CardRegra() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.comp}>
            <Text style={styles.font}> Descubra as regras para postar um carro em nosso App! </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Regras')}>
                <Text style={styles.text}>Regras</Text>
            </TouchableOpacity>
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