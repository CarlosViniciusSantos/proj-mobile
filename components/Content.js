import { View, Text, StyleSheet} from "react-native";
import CardImage from "./CardImage";
import CardFrase from "./CardFrase";
import CardRegra from "./CardRegra";
import CaroselCard from "./CaroselCard"
import CardAutos from "./CardAutos";

export default function Content() {
    
    return (
        <View>
            <CardImage/>
            <View style={styles.content}>
                <CardAutos/>
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