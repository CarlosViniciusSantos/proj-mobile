import { StyleSheet, ScrollView, View } from 'react-native';
import NavbarPesquisa from '../components/NavbarPesquisa';
import CardCarMaior from '../components/CardCarMaior';
import CardCarMenor from '../components/CardCarMenor';
import Footer from '../components/Footer'

export default function CatalogoCarros() {
    return (
        <View style={styles.container}>
            <NavbarPesquisa />
            <View style={styles.scro}>

            <ScrollView >
                <CardCarMaior/>
                <CardCarMenor/>
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
