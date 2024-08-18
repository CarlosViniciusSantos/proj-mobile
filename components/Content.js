import { View, Text, StyleSheet} from "react-native";
import CardImage from "./CardImage";
import CardFrase from "./CardFrase";
import CardRegra from "./CardRegra";
import CaroselCard from "./CaroselCard"

export default function Content() {
    
    return (
        <View>
            <CardImage/>
            <View style={styles.content}>
                <CardFrase/>
                <CaroselCard/>
                <CardRegra/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#dbdbdb',
        padding: 25,
        gap: 20
    },
})