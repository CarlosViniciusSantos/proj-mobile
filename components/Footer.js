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
        padding: 25,
        backgroundColor: '#000000cc',
        justifyContent: 'center',
        alignItems: 'center'
      }
})