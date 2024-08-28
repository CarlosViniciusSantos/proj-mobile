import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer'
import NavbarPadrao from '../components/NavbarPadrao'

export default function Regras() {
  return (
    <View style={styles.container}>
      <NavbarPadrao texto="Regras"/>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Regras</Text>

          <Text style={styles.ruleTitle}>Regra 1.</Text>
          <Text style={styles.ruleText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros elementum, 
            consequat urna quis, malesuada lacus. Fusce sed eros hendrerit, scelerisque lorem a, 
            dignissim lectus. Integer in urna imperdiet purus tempus vehicula. Pellentesque 
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Duis neque justo, blandit nec pretium sed, mattis vitae tortor. Aenean posuere 
            convallis bibendum. Curabitur eu pretium orci.
          </Text>

          <Text style={styles.ruleTitle}>Regra 2.</Text>
          <Text style={styles.ruleText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis eros elementum, 
            consequat urna quis, malesuada lacus. Fusce sed eros hendrerit, scelerisque lorem a, 
            dignissim lectus. Integer in urna imperdiet purus tempus vehicula. Pellentesque 
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Duis neque justo, blandit nec pretium sed, mattis vitae tortor. Aenean posuere 
            convallis bibendum. Curabitur eu pretium orci.
          </Text>

          <Text style={styles.ruleTitle}>Regra 3.</Text>
          <Text style={styles.ruleText}>
            Maecenas nisl tellus, commodo sed rhoncus et, fringilla vel lorem. Nullam bibendum nisl 
            massa, ut tempus urna rutrum porttitor. Vivamus gravida at orci eget tempus. Vivamus 
            volutpat enim leo, elementum tincidunt est eleifend ac. Ut a hendrerit ligula, in 
            consequat justo. Curabitur quis convallis lacus.
          </Text>

          <Text style={styles.ruleTitle}>Regra 4.</Text>
          <Text style={styles.ruleText}>
            Maecenas blandit neque vel sem faucibus, vel lacinia diam rutrum. Aenean odio ante, 
            pellentesque quis gravida at, pulvinar quis lacus. Sed vulputate eros tortor, a 
            consectetur quam dictum non. Curabitur fermentum nisi, sed imperdiet pulvinar, velit 
            turpis congue sapien, vitae porti etc leo ac nulla. Nunc scelerisque neque blandit 
            gravida imperdiet. Cras at enim facilisis diam consequat viverra a vel lectus. Fusce 
            pharetra augue id ligula ornare tincidunt. Donec tincidunt libero sed magna laoreet, 
            vel auctor tellus aliquam.
          </Text>

          <Text style={styles.ruleTitle}>Regra 5.</Text>
          <Text style={styles.ruleText}>
            Sed augue est, ultricies eget condimentum nec, consectetur laoreet enim. Phasellus ut 
            feugiat justo. Suspendisse potenti. Nullam sodales quis dolor eu pellentesque. Vivamus 
            commodo ultricies mattis. Pellentesque tortor sem, condimentum in rutrum at, vehicula 
            vitae magna. Ut nisi velit, gravida at facilisis malesuada, convallis in odio. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Vestibulum quis dolor id sem suscipit accumsan.
          </Text>

          <Text style={styles.ruleTitle}>Regra 6.</Text>
          <Text style={styles.ruleText}>
            Sed augue est, ultricies eget condimentum nec, consectetur laoreet enim. Phasellus ut 
            feugiat justo. Suspendisse potenti. Nullam sodales quis dolor eu pellentesque. Vivamus 
            commodo ultricies mattis. Pellentesque tortor sem, condimentum in rutrum at, vehicula 
            vitae magna. Ut nisi velit, gravida at facilisis malesuada, convallis in odio. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Vestibulum quis dolor id sem suscipit accumsan.
          </Text>
        </View>
      </ScrollView>

      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flex: 1
  },
  content: {
    padding: 25,
  },
  subtitle: {
    color: '#ed2626',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  ruleTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 18,
  },
  ruleText: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 5,
    textAlign: 'justify'
  }
});
