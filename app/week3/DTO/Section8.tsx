import { Text, TouchableOpacity, View } from "react-native";

// Section8 Component 
export default function Section8() {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                backgroundColor: '#fff',
                borderTopWidth: 4,
                borderColor: '#ddd',
            }}
        >
            {/* Price Info */}
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 14, color: '#555' }}>Price</Text>
                <Text style={{ color: '#e5634d', fontSize: 26, fontWeight: 'bold', marginVertical: 4 }}>
                    $399.99
                </Text>
                <Text style={{ fontSize: 12, color: '#888' }}>AVG/Night</Text>
            </View>

            {/* Book Now Button */}
            <TouchableOpacity
                style={{
                    backgroundColor: '#e5634d',
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    borderRadius: 8,
                }}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                    Book Now
                </Text>
            </TouchableOpacity>
        </View>
    );
}
