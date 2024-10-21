import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';  // Importando a navegação

import avatar from '../assets/images/nophoto.jpg';

export default function CardUser({ nome, email, telefone, foto, id, cidade, estado, cpf }) {
    const navigation = useNavigation();  // Hook para acessar a navegação

    return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('DetalhesUser', { nome, email, telefone, foto, id, cidade, estado, cpf, usuarioId: id,})}  // Navega e passa os dados
        >
            <Image source={foto ? { uri: foto } : avatar} style={styles.avatar} />
            <View style={styles.infos}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection:'row',
        alignItems:'center',
        gap:15,
        padding:7,
        borderWidth:0.5,
        borderRadius:16,
        borderColor:'darkred',
        marginVertical:7
    },
    avatar: {
        width:60,
        height:60,
        borderRadius:100
    },
    infos:{
        flex: 1,
    },
    nome:{
        fontWeight:'bold',
        fontSize: 16,
    },
    email:{
        fontWeight:'bold',
        color:'red',
        fontSize: 14,
    },
});
