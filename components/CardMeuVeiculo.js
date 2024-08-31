import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image'

export default function CardMeuVeiculo() {
    return (
        <View style={styles.pad}>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source='https://s3-alpha-sig.figma.com/img/6c2c/164d/9cb76dec557eb04612d1f6a0ead8f0c9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yebl1B8U1Fs7lP7HaUFWDGMUtQaasKAx13CASBvqvtLAw-YDh092qxMBwS1Lhme1eev7i8h84hVZAysRTNkqLGDCFcukcqw2TRNTgjUEbz~F7BCF-G08TrpyefGGihv~f0vA41GeT9DtszngjIGvVez0WG9k8V5CRwCiqNKmXSkf~p-oWOEN5E2mkX4YaykKhiwnnx2mypHTBVr9vCJjPE-1nzqWips9VUqoAMryCxCjQjYC6Oqk8BDmaGaD27d78LeZ2yeOt-wiGgeoncEIWfAOtJegqC7y3yLpcdzmOjzi9BiuU9Q--oXNDM36Ch-UT6n-RCyLS7~LndKcP7SW3Q__'
                />
                <View style={styles.infos}>


                    <View style={styles.madelo}>
                        <Text style={styles.marca}>Dodge</Text>
                        <Text style={styles.modelo}> Charger</Text>
                    </View>

                    <Text style={styles.preco}>R$ 300.000,00</Text>
                    <Text style={styles.adicionais}>Ler Detalhes...</Text>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.text}>Atualizar dados do veiculos</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pad: {
        paddingVertical: 10
    },
    card: {
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 150,
        height: 150,
    },
    infos: {
        paddingLeft: 9,
        paddingBottom: 5,
        // alignItems:'center',
        gap:16,
        width:'60%'
    },
    madelo: {
        flexDirection: 'row'
    },
    marca: {
        fontWeight: 'bold'
    },
    modelo: {
        fontWeight: 'bold',
        color: 'red'
    },
    adicionais: {
        color: 'red',
    },
    preco: {
        fontWeight: 'bold'
    },
    button: {
        // width: '80%',
        // paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        // marginBottom: 20,
        elevation: 3,
    },
    text: {
        fontSize: 10,
        // lineHeight: 21,
        fontWeight: 'bold',
        padding: 6,
        // letterSpacing: 0.25,
        color: 'white'
    },

})