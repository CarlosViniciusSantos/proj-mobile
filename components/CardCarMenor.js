import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'

export default function CardCarMenor() {
    return (
        <View style={styles.pad}>
            <View style={styles.card}>
            <Image
                style={styles.image}
                source='https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
            <View style={styles.infos}>

            
                <View style={styles.madelo}>
                    <Text style={styles.marca}>Toyota</Text>
                    <Text style={styles.modelo}> Supra</Text>
                </View>
           
            

               
                <Text style={styles.adicionais}>Ler Detalhes...</Text>
                
    
                    <Text style={styles.text}>Ano: 1993</Text>
                    <Text style={styles.text}>Cor: cinza prata</Text>
                    <Text style={styles.text}>KM: 74.587</Text>
                    <Text style={styles.text}>Caraguatauba-SP</Text>
                
                <Text style={styles.preco}>R$ 300.000,00</Text>
            
            </View>
        </View>
        </View>
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