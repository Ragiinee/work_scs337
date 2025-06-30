import { View } from "react-native";
import { ColorUnit } from '../layout';

export default function Ex12() {
    return (
        <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={{ backgroundColor: ColorUnit.color1, flex:1 }}></View>
            <View style={{ backgroundColor: ColorUnit.color2, flex:1 }}></View>
            <View style={{ backgroundColor: ColorUnit.color3, flex:1 }}></View>
        </View>
    );
}
