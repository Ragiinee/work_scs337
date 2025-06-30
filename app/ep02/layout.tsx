import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

//data link
import { styles } from '../(tabs)/_layout';

const buttonLinkEx = [
    { titleId: 1, title: 'Ex01 : Horizontal Stretch', Page: 'ep02/unit/ex01' },
    { titleId: 2, title: 'Ex02 : Vertical Stretch', Page: 'ep02/unit/ex02' },
    { titleId: 3, title: 'Ex03 : Horizontal Stacking Items', Page: 'ep02/unit/ex03' },
    { titleId: 4, title: 'Ex04 : Vertical Stacking Items', Page: 'ep02/unit/ex04' },
    { titleId: 5, title: 'Ex05 : Horizontal Center Stack', Page: 'ep02/unit/ex05' },
    { titleId: 6, title: 'Ex06 : Vertical Center Stack', Page: 'ep02/unit/ex06' },
    { titleId: 7, title: 'Ex07 : Bottom Align Vertical Stack', Page: 'ep02/unit/ex07' },
    { titleId: 8, title: 'Ex08 : Space Between Horizontal', Page: 'ep02/unit/ex08' },
    { titleId: 9, title: 'Ex09 : Space Between and Around', Page: 'ep02/unit/ex09' },
    { titleId: 10, title: 'Ex10 : Fullscreen Flex', Page: 'ep02/unit/ex10' },
    { titleId: 11, title: 'Ex11 : Flex Split', Page: 'ep02/unit/ex11' },
    { titleId: 12, title: 'Ex12 : Flex Portion', Page: 'ep02/unit/ex12' },
];

export const ColorUnit = {
    color1: '#4fe3c1',
    color2: '#4a91e3',
    color3: '#8f13fd'
}



export default function ChoniceEx() {
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
                            style={
                                {
                                    flex: 1, justifyContent: "center", alignItems: "center",
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