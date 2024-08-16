import { View, Text, StyleSheet } from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
        <Text>&copy; Copyright 2024 Carlos Vinicius</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        padding: 15,
        backgroundColor: '#7267c9',
        justifyContent: 'center',
        alignItems: 'center'
      }
})