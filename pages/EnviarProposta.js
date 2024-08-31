import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';

export default function EnviarProposta() {

    return (

        <View style={styles.container2}>

            <NavbarPadrao texto="Enviar Proposta" />

            <ScrollView contentContainerStyle={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                />
                <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Mensagem"
                    multiline
                />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    messageInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 350,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
