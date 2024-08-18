import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from 'expo-image'


export default function CardAutos() {
    return (
        <View>
            <ScrollView horizontal={true}>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/756789/pexels-photo-756789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/17359969/pexels-photo-17359969/free-photo-of-carro-preto-farois-refletores-toyota.jpeg'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3323202/pexels-photo-3323202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.image}
                        source='https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Text style={styles.auto}>Autos</Text>
                </View>
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    card: {
        padding:30,
        paddingTop:10,
        paddingLeft:0,
        paddingBottom:0

    },
    auto: {
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 10
    }
})