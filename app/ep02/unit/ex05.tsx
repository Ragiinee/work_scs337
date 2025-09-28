import { View } from "react-native";
import { ColorUnit } from '../layout';

export default function Ex05() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: ColorUnit.color1, width: 100, height: 100 }}></View>
            <View style={{ backgroundColor: ColorUnit.color2, width: 100, height: 100 }}></View>
            <View style={{ backgroundColor: ColorUnit.color3, width: 100, height: 100 }}></View>
        </View>
    );
}
