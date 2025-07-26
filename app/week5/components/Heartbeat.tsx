import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Heartbeat() {
    const [numberHeart, setnumberHeart] = useState(0);

    return (
        <View style={{ paddingHorizontal: 60,paddingVertical:30}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => setnumberHeart(numberHeart + 1)}>
                    <FontAwesome name="heart" size={80} color="#ffa500" />
                </TouchableOpacity>

                <Text style={{ fontWeight: 'bold', fontSize:64 }}>
                    {numberHeart}
                </Text>
            </View>
        </View>
    );
}
