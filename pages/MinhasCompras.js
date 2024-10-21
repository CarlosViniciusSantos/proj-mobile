import { StyleSheet, ScrollView, View } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import CardMinhasCompras from '../components/CardMinhasCompras'

export default function MinhasCompras() {
    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Minhas Compras" />
            <View style={styles.scro}>

            <ScrollView >
                <CardMinhasCompras/>
            </ScrollView>
            </View>
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
