import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
// import NavbarPesquisa from './components/navbarPesquisa'; 

export default function App() {
  return (
  

  
    <View style={styles.container}>
      <ScrollView>    
        <Content />
      </ScrollView>
        <Header/>
        {/* <NavbarPesquisa />  */}

        <Footer />

    </View>
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
