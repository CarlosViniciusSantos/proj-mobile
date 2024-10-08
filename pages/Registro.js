import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native';

export default function Registro() {
    return (

        <ImageBackground style={styles.bg} source={require('../assets/images/background.png')}>
            <View style={styles.overlay}>
                <View style={styles.registro}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo.png')}
                    />
                    <View><Text style={styles.nada}>.....</Text></View>
                </View>


                <View style={styles.forbo}>
                        <Text style={styles.title}>Registro</Text>
                    <View style={styles.forms}>
                        <View style={styles.formGroup}>
                            <TextInput style={[styles.input, styles.nome]} placeholder="Nome" />
                        </View>

                        <View style={styles.formGroup}>
                            <TextInput style={styles.input} placeholder="CPF" />
                            <TextInput style={styles.input} placeholder="Data de Nascimento" />
                        </View>

                        <View style={styles.formGroup}>
                            <TextInput style={[styles.input, styles.nome]} placeholder="Email" />
                        </View>

                        <View style={styles.formGroup}>
                            <TextInput style={styles.input} placeholder="Cidade" />
                            <TextInput style={styles.input} placeholder="Estado" />
                        </View>

                        <View style={styles.formGroup}>
                            <TextInput style={[styles.input, styles.nome]} placeholder="Telefone" keyboardType='numeric' />
                        </View>
                        <View style={styles.formGroup}>
                            <TextInput style={styles.input} placeholder="Senha" />
                            <TextInput style={styles.input} placeholder="Confirmar Senha" />
                        </View>
                    </View>
                    <View style={styles.botao}>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.text}>Criar</Text>
                        </TouchableOpacity>
                        <Text style={styles.signupText}>
                            Já tem uma conta? <Text style={styles.signupLink}>Entrar</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    overlay: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0,
        gap:60,
        flex:1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    login: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    input: {
        width: '48%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        width: '80%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    signupText: {
        color: '#333',
        fontSize: 14,
    },
    signupLink: {
        color: 'red',
        fontWeight: 'bold',
    },
    nome: {
        width: '100%'
    },
    forbo: {
        gap: 10,
        justifyContent: 'center',
        // height: '100%',
        alignItems:"center",
        width:'100%',
        flex:1
    },
    botao: {
        alignItems: 'center',
        width:"100%",
        gap:5
    },
    registro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 10,
        borderColor: 'transparent',
        // top: 0,
        width: '100%',
        // gap:10
    },
    forms: {
        borderBottomWidth: 50,
        borderColor: 'transparent',
        // alignItems:'center'
    },
    nada: {
        color: 'transparent'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain'

    },
});
