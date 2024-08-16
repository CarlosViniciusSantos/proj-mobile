import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'

export default function CardAccount(){
    return(
        <View style={styles.card}>
            <Image
            style={styles.logo}
            source={require('../assets/logo-insta.png')}
            />

            <View style={styles.content}>
                <Text style={styles.service}>INSTAGRAM</Text>
                <Text style={styles.username}>c.ss_pv</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        padding: 10,
        borderStyle: 'solid',
        borderColor:'#EEEEEE',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius:10

    },
    logo:{
        width:60,
        height:60
    },
    content:{
        gap:8
    },
    service:{
        fontSize: 17
    },
    username:{
        color: '#BBBBBB'
    }
})