// Section4 Component 

import { Text, View } from "react-native";

export default function Section4() {
    return (
        <View >
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3b3b3b', marginBottom: 16 }}>Hotel Description</Text>
            <Text style={{ fontSize: 16, color: '#3b3b3b' }}>
                218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
            </Text>
        </View>
    );
}