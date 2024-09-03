import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NavbarDetalhes from '../components/NavbarDetalhes';
import FooterVendas from '../components/FooterVendas';

export default function DetalhesVendedor() {
    return (
        <View style={styles.container}>

            <NavbarDetalhes texto="Vendedor"/>

            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/avatar-hidan.jpg')}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>Emily Cristina Ferreira Da Cruz</Text>
                        <Text style={styles.location}>Localização da Vendedora -----</Text>
                    </View>
                </View>

                <View style={styles.achievements}>
                    <Text style={styles.achievementTitle}>Conquistas</Text>
                    <View style={styles.achievementsRow}>
                        <View style={styles.achievementItem}>
                            <Ionicons name="medal-outline" size={32} color="black" />
                            <Text style={styles.achievementText}>desde 01/2089</Text>
                            <Text style={styles.achievementText}>no nosso App</Text>
                        </View>
                        <View style={styles.achievementItem}>
                            <Ionicons name="car-sport-outline" size={32} color="black" />
                            <Text style={styles.achievementText}>anunciou mais de</Text>
                            <Text style={styles.achievementText}>400 carros</Text>
                        </View>
                        <View style={styles.achievementItem}>
                            <Ionicons name="time-outline" size={32} color="black" />
                            <Text style={styles.achievementText}>Responde em até</Text>
                            <Text style={styles.achievementText}>10 horas</Text>
                        </View>
                    </View>
                </View>
            </View>

            <FooterVendas/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    navbarContainer: {
        backgroundColor: '#fff',
        borderTopWidth: 20,
        borderColor: 'transparent',
        elevation: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 18,
    },
    titleText: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 0,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    navItem: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        padding: 15,
        gap: 6,
    },
    navText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailsContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFF',
        marginTop: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    location: {
        color: '#888',
    },
    achievements: {
        marginBottom: 16,
    },
    achievementTitle: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    achievementsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    achievementItem: {
        alignItems: 'center',
        flex: 1,
    },
    achievementText: {
        textAlign: 'center',
        marginTop: 4,
        fontSize: 12,
    },
});