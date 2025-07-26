// Section1 Component 

import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section1() {
    return (
        <View style={{ position: 'relative' }}>

            <View style={{ position: 'absolute', flexDirection: "row", justifyContent: "space-between", zIndex: 1, width: "100%", padding: 24 }}>
                <Pressable onPress={() => router.back()}>
                    <FontAwesome  name="arrow-left" size={30} color="white" />
                </Pressable>
                <View style={{ alignItems: "flex-end" }}>
                    <MyIcon title="" name="image" size={30} color="white" />
                </View>
            </View>

            <View style={{ flexDirection: "row", width: "100%", height: 350 }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 1, height: 'auto' }} source={require("@/assets/week3/room-6.jpg")} />
            </View>
        </View>

    );
}