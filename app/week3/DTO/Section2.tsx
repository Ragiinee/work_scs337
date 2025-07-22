import { Text, View } from "react-native";
import MyIcon from "./MyIcon";


// Section2 Component 
export default function Section2() {
    return (
        <View style={{ marginTop: -50, paddingBottom: 20, width: '100%' }}>
            <View style={{ backgroundColor: '#f5f5f5', marginHorizontal: 20, borderRadius: 10, shadowRadius: 5, shadowOpacity: 0.3, padding: 20, height: 'auto' }}>

                {/* titer */}
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center', color: '#3b3b3b' }}>Hilton San Francisco</Text>

                {/* star icon */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', width: 100 }}>
                        <MyIcon title="" name="star" size={24} color="#fdc60c" />
                        <MyIcon title="" name="star" size={24} color="#fdc60c" />
                        <MyIcon title="" name="star" size={24} color="#fdc60c" />
                        <MyIcon title="" name="star" size={24} color="#fdc60c" />
                        <MyIcon title="" name="star-half-empty" size={24} color="#fdc60c" />
                    </View>
                </View >

                {/* description */}
                <Text style={{ fontSize: 20, textAlign: 'center', color: '#979797', marginBottom: 16 }}>
                    Facilities provided may range from a modest quality mattress in a small room to large suites
                </Text>
            </View>
        </View>
    );
}