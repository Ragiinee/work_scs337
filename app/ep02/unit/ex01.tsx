import { View } from "react-native";
import { ColorUnit } from '../layout';

export default function Ex01() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ backgroundColor: ColorUnit.color1, height: 100 }}></View>
        </View>
    );
}
