import { View, Text, StyleSheet } from "react-native";
import CardAccount from "./CardAccount";

export default function Header() {
    return (
        <View style={styles.content}>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
            <CardAccount/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#85495e',
        padding: 15,
        gap: 20
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})