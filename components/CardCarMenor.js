import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

export default function CardCarMenor(props) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.pad} onPress={() => navigation.navigate('Anuncio', {veiculo:props})}>
            <View style={styles.card}>
            <Image
                style={styles.image}
                source={props.foto}
            />
            <View style={styles.infos}>

            
                <View style={styles.madelo}>
                    <Text style={styles.marca}>{props.marca} </Text>
                    <Text style={styles.modelo}>{props.modelo}</Text>
                </View>
               
                <Text style={styles.adicionais}>Ler Detalhes...</Text>
                
    
                    <Text style={styles.text}>Ano: {props.anoFabricacao}</Text>
                    <Text style={styles.text}>Cor: {props.cor}</Text>
                    <Text style={styles.text}>KM: {props.km}</Text>
                    <Text style={styles.text}>{props.cidade}-{props.estado}</Text>
                
                <Text style={styles.preco}>R$ {props.valor}</Text>
            
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pad:{
        paddingVertical:10
    },
    card: {
        flexDirection:'row',
        elevation:10,
        borderRadius: 8,
        backgroundColor:'white',
    },
    image: {
        width: '40%',
        height: '100%',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    infos: {
        paddingLeft: 5,
        paddingBottom:5
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
        color: 'red',
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
        padding:0.5
    }

})