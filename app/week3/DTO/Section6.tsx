// Section6 Component 

import { Image, Text, View } from "react-native";

export default function Section6() {
    return (
        <View >
            {/* Text block */}
            <View style={{ marginBottom: 12 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 6 }}>Location</Text>
                <Text style={{ fontSize: 14, color: '#555', lineHeight: 20 }}>
                    218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
                </Text>
            </View>

            {/* Map image */}
            <View style={{ justifyContent: 'center' }}>
                <Image
                    source={require("@/assets/week3/map.jpg")}
                    style={{
                        width: '100%',
                        aspectRatio:2,
                        borderRadius: 8,
                        resizeMode: 'cover',
                    }}
                />
            </View>
        </View>
    );
}
