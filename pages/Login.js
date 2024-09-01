import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native';

export default function Login() {

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/images/background.png')}>
                <View style={styles.overlay}>
                    <TouchableOpacity style={styles.voltar} >
                        <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                    </TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo.png')}
                    />
                    <View style={styles.forms}>

                        <View style={styles.inputs}>
                        <Text style={styles.login}>Login</Text>

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                            />
                            <TextInput
                                style={[styles.input, { marginBottom: 60 }]}
                                placeholder="Senha"
                                
                            />
                        </View>
                        <View style={styles.botoes}>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>Entrar</Text>
                            </TouchableOpacity>
                            <Text style={styles.signupText}>
                                Não tem uma conta? <Text style={styles.signupLink} >Criar conta</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    overlay: {
        width: '90%',
        alignItems: 'center',
        position: 'relative'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 190,

    },
    login: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderColor: '#000',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
    },
    button: {
        width: '80%',
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        marginBottom: 20,
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
        marginBottom: 100,
    },
    signupLink: {
        color: 'red',
        fontWeight: 'bold',
    },
    voltar: {
        position: 'absolute',
        top: 30,
        left: 1
    },
    forms: {
        gap: 50,
        width: "100%",
        alignItems: "center"
    },
    inputs: {
        width: "100%",
        alignItems:'center'
    },
    botoes:{
        width:"100%",
        alignItems:"center"
    }
});
