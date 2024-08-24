import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function SideBarUser() {
    return (
        <View style={styles.container}>
            <View style={styles.perfilContainer}>
                <Image
                    source={require('../assets/images/avatar-hidan.jpg')}
                    style={styles.perfilImage}
                />
                <View style={styles.usuario}>
                    <Text style={styles.ola}>Olá!</Text>
                    <Text style={styles.username}>Usuário</Text>
                </View>
            </View>

            <Pressable style={styles.textContainer}>
                <Text style={styles.Text}>Atualizar Dados da Conta</Text>
            </Pressable>

            <Pressable style={styles.textContainer}>
                <Text style={styles.Text}>Sobre nós</Text>
            </Pressable>

            <Pressable style={styles.textContainer}>
                <Text style={styles.Text}>Regras</Text>
            </Pressable>
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
        marginBottom: 20
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
    }
});
