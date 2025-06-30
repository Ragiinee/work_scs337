import { View } from "react-native";
import { ColorUnit } from '../layout';

export default function Ex11() {
    return (
        <>
            <View style={{ backgroundColor: ColorUnit.color2, flex: 1 }}></View>
            <View style={{ backgroundColor: ColorUnit.color1, flex: 1 }}></View>
        </>
    );
}
