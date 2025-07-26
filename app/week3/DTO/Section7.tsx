// Section7 Component 
import { Image, Text, View } from "react-native";

export default function Section7() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, color: '#3b3b3b', fontWeight: '700', marginBottom: 16 }}>
                Room Type
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* Image box */}
                {/* Image box */}
                <View
                    style={{
                        borderRadius: 12,
                        overflow: 'hidden',
                        height: 120,
                        width: 120,
                        marginRight: 16,
                        backgroundColor: '#fff',
                    }}
                >
                    <Image
                        source={require("@/assets/week3/room-8.jpg")}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                        }}
                    />
                </View>


                {/* Text block */}
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems:'flex-start',height:120 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#3b3b3b', marginBottom: 8 }}>
                        Standard Twin Room
                    </Text>

                    <View>
                        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#e5634d' }}>$399.99</Text>
                        <Text style={{ fontSize: 14, color: '#4a90a4', marginTop: 4 }}>
                            Hurry Up! This is your last room!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
