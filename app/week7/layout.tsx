import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

//data link
import { styles } from '../index';

const buttonLinkEx = [
    { titleId: 1, title: 'Chart', Page: 'week7/screen/chart' },
    { titleId: 2, title: 'YourHealth', Page: 'week7/screen/your-health' },
    { titleId: 3, title: 'TodoList', Page: 'week7/screen/todolist' },
];

export default function ChoniceEx3() {
    return (
        <>
            <View >
                <Text style={styles.TextH1}>
                    โปรดเลือกเมนู
                </Text>
            </View>
            <ScrollView
            >
                {
                    buttonLinkEx.map((item: any) =>
                    (
                        <View
                            key={item.titleId}
                            style={
                                {
                                    flex: 1, justifyContent: "center", alignItems: "center", marginVertical: 6
                                }
                            }>
                            <TouchableOpacity
                                key={item.titleId}
                                style={styles.buttonColor}
                                onPress={() => router.push(item.Page)}
                            >
                                <Text style={{ color: "#fff", fontWeight: "bold", textAlign: 'center' }}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>

        </>
    )
}