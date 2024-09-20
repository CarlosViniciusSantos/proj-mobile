import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import avatar from '../assets/images/nophoto.jpg'

export default function CardUser({ nome, email}) {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={avatar} style={styles.avatar} />
            <View style={styles.infos}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </TouchableOpacity>
    )
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
    infos:{},
    nome:{
        fontWeight:'bold'
    },
    email:{
        fontWeight:'bold',
        color:'red'
    },
})