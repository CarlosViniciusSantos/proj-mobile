import { StyleSheet, ImageBackground, View, Text, TextInput, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/images/background.png')}>
                <View style={styles.overlay}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" style={styles.voltar} />
                    <Text style={styles.title}>CarTech</Text>
                    <Text style={styles.login}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                    />
                    <TextInput
                        style={[styles.input, { marginBottom: 60 }]}
                        placeholder="Senha"
                    />
                    <Pressable style={styles.button} >
                        <Text style={styles.text}>Entrar</Text>
                    </Pressable>
                    <Text style={styles.signupText}>
                        Não tem uma conta? <Text style={styles.signupLink}>Criar conta</Text>
                    </Text>
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
    }
});
