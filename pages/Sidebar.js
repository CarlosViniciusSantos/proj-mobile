import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SideBarUser() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.perfilContainer}>
                <Image
                    source={require('../assets/images/avatar-hidan.jpg')}
                    style={styles.perfilImage}
                />
                <View style={styles.usuario}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SideBarUser')}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('SobreNos')}>
                <Text style={styles.Text}>Sobre nós</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('Regras')}>
                <Text style={styles.Text}>Regras</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    perfilContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
        gap:10
    },
    perfilImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    ola: {
        fontSize: 18,
        marginTop: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    textContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#dcdcdc',
        backgroundColor: '#ffffff',
    },
    Text: {
        fontSize: 16,
    },
    usuario: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    button: {
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
