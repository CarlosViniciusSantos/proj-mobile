import { View, Text, StyleSheet } from "react-native";
import CardAccount from "./CardAccount";

export default function Header() {
    return (
        <View style={styles.content}>
            {/* CARDACCOUNT ADICIONADO APENAS PARA A VISUALIZAÇÃO COMPLETA DO APP
             MEXER APENAS NA SUA PARTE, CASO ALGO ESTEJA ATRAPALHANDO SUA PARTE, AVISE AO AMIGUINHO QUE A PARTE DELE ESTA ATRAPALHANDO, PARA UMA MANUTENÇÃO MELHOR 
             OBRIGADO! */}
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
        backgroundColor: '#dbdbdb',
        padding: 15,
        gap: 20
    }
})