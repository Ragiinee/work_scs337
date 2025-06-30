import { View } from "react-native";
import { ColorUnit } from '../layout';

export default function Ex09() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: ColorUnit.color1, width: 100, height: 100 }}></View>
                <View style={{ backgroundColor: ColorUnit.color2, width: 100, height: 100 }}></View>
                <View style={{ backgroundColor: ColorUnit.color3, width: 100, height: 100 }}></View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: ColorUnit.color1, width: 100, height: 100 }}></View>
                <View style={{ backgroundColor: ColorUnit.color2, width: 100, height: 100 }}></View>
                <View style={{ backgroundColor: ColorUnit.color3, width: 100, height: 100 }}></View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: ColorUnit.color1, width: 100, height: 100 }}></View>
                <View style={{ backgroundColor: ColorUnit.color2, width: 100, height: 100 }}></View>
                <View style={{ backgroundColor: ColorUnit.color3, width: 100, height: 100 }}></View>
            </View>
        </View>
    );
}
