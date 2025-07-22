// Section3 Component 

import { Text, View } from "react-native";

export default function Section3() {
    return (
        <View style={{ flexDirection: 'row', padding: 20 }}>
            <View style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5634d', borderRadius: 100, marginEnd: 20 }}>
                <Text style={{ fontSize: 24, color: 'white', fontWeight: 'black' }}>
                    9.5
                </Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'space-between', paddingVertical: 20 }}>
                <Text style={{ fontSize: 32, color: '#e5634d', fontWeight: 'semibold' }}>Excellent</Text>
                <Text style={{ fontSize: 16 }}>See 801 reviews</Text>
            </View>
        </View>
    );
}