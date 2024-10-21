import { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

export default function Images() {
    const [images, setImages] = useState([]);
    
    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 4],
            quality: 1,
            allowsMultipleSelection: true,
        });

        if (!result.canceled) {
            setImages(result.assets.map(asset => asset.uri)); // Armazena todas as imagens selecionadas
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:200 }}>
            <Text>Imagens</Text>
            <ScrollView pagingEnabled horizontal style={{flex:1}}>
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={{ width, height: width }} />
                    ))
                ) : (
                    <Text>Nenhuma imagem selecionada</Text>
                )}
            </ScrollView>
            <TouchableOpacity onPress={handleImagePicker} style={{ backgroundColor: 'red', padding: 10, margin: 60, borderRadius: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Escolher Imagem</Text>
            </TouchableOpacity>
        </View>
    );
}
