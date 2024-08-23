import { StyleSheet, ImageBackground, View, Text, TextInput, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/background.png')}>
                <View style={styles.overlay}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="black" style={styles.voltar} />
                    <Text style={styles.title}>Registro</Text>
                    {/* <Text style={styles.login}>Registro</Text> */}
                    <View style={styles.formGroup}>
                        <TextInput style={[styles.input, styles.nome]} placeholder="Nome" placeholderTextColor="#000" />
                    </View>

                    <View style={styles.formGroup}>
                        <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#000" />
                        <TextInput style={styles.input} placeholder="Data de Nascimento" placeholderTextColor="#000" />
                    </View>

                    <View style={styles.formGroup}>
                        <TextInput style={[styles.input, styles.nome]} placeholder="Email" placeholderTextColor="#000" />
                    </View>

                    <View style={styles.formGroup}>
                        <TextInput style={styles.input} placeholder="Cidade" placeholderTextColor="#000" />
                        <TextInput style={styles.input} placeholder="Estado" placeholderTextColor="#000" />
                    </View>

                    <View style={styles.formGroup}>
                        <TextInput style={[styles.input, styles.nome]} placeholder="Telefone" placeholderTextColor="#000" />
                    </View>
                    <View style={styles.formGroup}>
                        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#000" />
                        <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#000" />
                    </View>
                    <Pressable style={styles.button} >
                        <Text style={styles.text}>Criar</Text>
                    </Pressable>
                    <Text style={styles.signupText}>
                        Já tem uma conta? <Text style={styles.signupLink}>Entrar</Text>
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
        // marginBottom: 170,
    },
    login: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 50,
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        gap: 15
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
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        // marginBottom: 20,
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
        top: 2,
        left: 1
    },
    nome: {
        width: '100%'
    }
});
