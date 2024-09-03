import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import NavbarPadrao from '../components/NavbarPadrao';

export default function LocalizacaoCarro() {

    return (
        <View style={styles.container}>
            <NavbarPadrao texto="Atualizar Meus Dados" />
            <View style={styles.container2}>

                <View style={styles.headerContainer}>
                    {/* <Text style={styles.primeira}>Primeira Etapa</Text> */}
                    {/* <Text style={styles.localiza}>Onde se localiza o Carro?</Text> */}
                </View>

                <View style={styles.formContainer}>
                    <View>

                        <TextInput style={styles.input} placeholder="Nome" />
                        <View style={styles.row}>
                            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="CPF" />
                            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Data de Nascimento" />
                        </View>
                        <TextInput style={styles.input} placeholder="Email" />
                        <View style={styles.row}>
                            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Cidade" />
                            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Estado" />
                        </View>
                        <TextInput style={styles.input} placeholder="Telefone" />
                        <View style={styles.row}>
                            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Senha" />
                            <TextInput style={[styles.input, styles.cidadeEstado]} placeholder="Confirmar Senha" />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.proxButton} >
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative'
    },
    container2: {
        flex: 1,
        padding: 20,
        position: 'relative'
    },
    headerContainer: {
        marginBottom: 30,
    },
    primeira: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 80
    },
    localiza: {
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
        paddingTop: 50,
        color: 'red'
    },
    formContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    cidadeEstado: {
        width: '48%',
    },
    lograd: {
        width: '70%',
    },
    num: {
        width: '28%',
    },
    proxButton: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
