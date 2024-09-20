import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import logoImg from '../assets/images/logo.png'
import avatar from '../assets/images/avatar-hidan.jpg'
export default function NavbarAdm({ user, vend }) {

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.titleContainer}>
                <Image source={logoImg} style={styles.logo} />
                <View style={styles.user}>
                    <Text>Olá! AdmNome</Text>
                    <Image source={avatar} style={styles.avatar} />
                </View>
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity style={[styles.navItem]}>
                    {user === true ?
                        <Text style={styles.navTextAct}>Usuários</Text>
                        : <Text style={styles.navText}>Usuários</Text>}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navItem]}>
                    {vend === true ?
                        <Text style={styles.navTextAct}>Vendedores</Text>
                        : <Text style={styles.navText}>Vendedores</Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarContainer: {
        backgroundColor: '#fff',
        borderTopWidth: 20,
        borderColor: 'transparent',
        elevation: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    logo: {
        width: 110,
        height: 50,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navItem: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderBottomWidth: 0,
        padding: 15,
        gap: 6
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    navTextAct: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },
})