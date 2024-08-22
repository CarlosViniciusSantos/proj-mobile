import { StyleSheet, ImageBackground, View, Text, TextInput } from 'react-native';

// import bg from '../assets/Bg.svg'

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/Bg.png')}>
                <Text style={styles.login}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#888"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#888"
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    login: {
        color: 'green'
    },
    bg: {
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 90,
        paddingBottom: 100,
        borderTopWidth: 210,
        borderTopColor: 'white'
    },
    input: {
        width: '80%',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // Apenas para Android
        
    },
})