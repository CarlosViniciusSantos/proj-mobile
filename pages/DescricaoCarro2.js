import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function DescricaoCarro2() {
    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Vender Carro" />

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Terceira Etapa</Text>
                <Text style={styles.subtitle}>Adicione Fotos do Carro</Text>

                <View style={styles.imageRow}>
                    <MaterialCommunityIcons name="image-plus" size={50} color="red" />
                    <MaterialCommunityIcons name="image-plus" size={50} color="red" />
                    <MaterialCommunityIcons name="image-plus" size={50} color="red" />
                    <MaterialCommunityIcons name="image-plus" size={50} color="red" />
                    <MaterialCommunityIcons name="image-plus" size={50} color="red" />
                    <MaterialCommunityIcons name="image-plus" size={50} color="red" />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Publicar Carro</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        paddingTop: 30
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 100,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});
