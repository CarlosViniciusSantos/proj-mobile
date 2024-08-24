import { StyleSheet, ScrollView, View } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import Footer from '../components/Footer'
import CardMeuVeiculo from '../components/CardMeuVeiculo';

export default function MeusVeiculos() {
    return (
        <View style={styles.container}>
            <NavbarPadrao />
            <View style={styles.scro}>

            <ScrollView >
                <CardMeuVeiculo/>
            </ScrollView>
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scro: {
        flex:1,
        paddingHorizontal: 10,
        backgroundColor: '#ECECEC'
    },
})
