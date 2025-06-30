import { View } from "react-native";
import { ColorUnit } from '../layout';

export default function Ex02() {
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ backgroundColor: ColorUnit.color1, width: 100 }}></View>
        </View>
    );
}
