import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.user} >
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
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000000cc',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 18,
    paddingBottom:10,
    paddingTop:35,
    position:'absolute',
    right: 0,
    left: 0,
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
    color: 'white'
  },
  menu: {
    padding: 10
  },
  logo:{
    width:90,
    height:40,
  }
})