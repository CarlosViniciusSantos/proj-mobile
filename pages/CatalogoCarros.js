import { StyleSheet, ScrollView, View } from 'react-native';
import NavbarPesquisa from '../components/NavbarPesquisa';
import CardCarMaior from '../components/CardCarMaior';
import Footer from '../components/Footer'

export default function CatalogoCarros() {
    return (
        <View style={styles.container}>
            <NavbarPesquisa />
            <View style={styles.scro}>

            <ScrollView >
                <CardCarMaior />
                <CardCarMaior />
                <CardCarMaior />
                <CardCarMaior />
                <CardCarMaior />
                <CardCarMaior />
                <CardCarMaior />
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
