import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <Content />
      </ScrollView>
        <Header/>
        <Footer />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
