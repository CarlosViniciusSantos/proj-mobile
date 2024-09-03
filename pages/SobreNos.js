import { View, Text, StyleSheet } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';

export default function SobreNos() {
    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Sobre Nós" />
            <View style={styles.container2}>

                <Text style={styles.title}>Quem Somos Nós?</Text>
                <Text style={styles.description}>
                    Somos uma empresa dedicada a tornar a compra do seu carro novo uma experiência simples, transparente e sem estresse.
                    Nossa missão é conectar você diretamente com as melhores ofertas do mercado, facilitando a negociação e garantindo que
                    você encontre o veículo perfeito para suas necessidades.
                </Text>
                <Text style={styles.subtitle}>O que oferecemos:</Text>
                <View style={styles.list}>
                    <Text style={styles.listItem}>• Transparência Total: Informações claras e detalhadas sobre cada veículo e oferta, para que você possa tomar decisões informadas.</Text>
                    <Text style={styles.listItem}>• Facilidade de Comunicação: Interação direta e eficiente com nossos revendedores parceiros, sem intermediários desnecessários.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container2: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#000',
        textAlign: 'justify',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 10,
    },
    list: {
        marginLeft: 10,
        textAlign: 'justify'
    },
    listItem: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        
    },
});
