import { StyleSheet, ImageBackground, View, Text, TextInput, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Login() {
    return (
        <ImageBackground
            style={styles.bg}
            source={require('../assets/images/background.png')}>
            <View style={styles.overlay}>
                <View style={styles.registro}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                    <Text style={styles.title}>Login</Text>
                    <View><Text style={styles.nada}>.....</Text></View>
                </View>
                <View style={styles.forbo}>
                    <View style={styles.forms}>

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                        />
                        <TextInput
                            style={[styles.input, { marginBottom: 60 }]}
                            placeholder="Senha"
                        />
                    </View>
                    <View style={styles.botao}>

                        <Pressable style={styles.button} >
                            <Text style={styles.text}>Entrar</Text>
                        </Pressable>
                        <Text style={styles.signupText}>
                            Não tem uma conta? <Text style={styles.signupLink}>Criar conta</Text>
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
        paddingBottom: 0
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 170,
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
        width: '90%',
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
        marginTop: 20,
        color: '#333',
        fontSize: 14,
    },
    signupLink: {
        color: 'red',
        fontWeight: 'bold',
    },
    voltar: {
        position: 'absolute',
        top: -60,
        left: 1
    },
    registro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 30,
        borderColor: 'transparent',
        // top: 0,
        width: '100%',
        // gap:10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },

    nada: {
        color: 'transparent'
    },
    forbo: {
        gap: 40,
        justifyContent: 'center',
        height: '100%',
    },
    forms: {
        borderBottomWidth: 50,
        borderColor: 'transparent',
        width:300
    },

    botao: {
        alignItems: 'center'
    },
});
