// Section5 Component 
import { Text, View } from "react-native";
import MyIcon from "./MyIcon";

const IconHotelDescription = [
    { name: "wifi", title: "wifi" },
    { name: "coffee", title: "coffee" },
    { name: "bath", title: "bath" },
    { name: "car", title: "car" },
    { name: "paw", title: "paw" }
]

export default function Section5() {
    return (
        <View style={{ paddingVertical: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {
                    IconHotelDescription.map((item: any, index: number) => (
                        <View key={index}
                            style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <MyIcon name={item.name} size={50} color="#4a90a4" />
                            <Text style={{ color: '#979797', fontSize: 16, marginTop: 10 }}>{item.title}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    );
}