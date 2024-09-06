import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.user}>
        <Text style={styles.name}>username</Text>
        <Image
          style={styles.avatar}
          source={require('../assets/images/avatar-hidan.jpg')}
        />
      </View>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 18,
    paddingBottom: 10,
    paddingTop: 40,
    position: 'absolute',
    top: 0, // Ajusta a posição para o topo da tela
    right: 0,
    left: 0,
    zIndex: 1000, // Garante que o Header fique acima de outros componentes
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: 'black'
  },
  menu: {
    padding: 10
  },
  logo:{
    width:110,
    height:50,
  }
});
