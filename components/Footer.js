import { View, Text, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Footer(){
    return(
      <View style={styles.footer}>
        <Feather name="home" size={25} color="white" />
        <Feather name="search" size={25} color="white" />
        <AntDesign name="plus" size={25} color="white" />
        <Ionicons name="car-sport-outline" size={25} color="white" />
        <Feather name="menu" size={25} color="white" />
      </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        padding: 22,
        backgroundColor: 'darkred',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 50

      }
})