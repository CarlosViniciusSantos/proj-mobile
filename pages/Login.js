import { StyleSheet, ImageBackground, View, Text, TextInput } from 'react-native';

// import bg from '../assets/Bg.svg'

export default function Login() {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/background.png')}>
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
        flex:1,
    },
    login: {
        color: 'black',
        borderBottomWidth:90,
        borderBottomColor: 'transparent'
    },
    bg: {
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        gap: 30
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
        elevation: 3
        
    },
})