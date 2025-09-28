import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {

    const [onlineTours, setOnlineTours] = useState<any[]>([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            // console.log("Load Data : ", data);
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 24, fontWeight: 700 }}>Upcoming Events</Text>
            <Text style={{ fontSize: 16, marginVertical: 12, color: "grey" }}>What's the Worst that could Happend</Text>
            <FlatList
                style={{ paddingBottom: 12, marginTop: 20 }}
                horizontal={true}
                keyExtractor={item => item.id}
                data={onlineTours}
                renderItem={
                    ({ item, index }: any) => {
                        return (
                            <View style={{ marginRight: 10 }} >
                                <Image style={{ width: 250, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{
                                    flexDirection: "row", width: 250, backgroundColor: 'lightyellow',
                                    borderWidth: 1, borderColor: "grey", borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                                    overflow: 'scroll'
                                }}>
                                    <View style={{ padding: 10 }} >
                                        <Text style={{ fontSize: 15, color: 'red', textAlign: "center" }}>{item.month}</Text>
                                        <Text style={{ fontSize: 15, color: 'gray', textAlign: "center" }}>{item.date}</Text>
                                    </View>
                                    <View style={{ padding: 10 }} >
                                        <Text style={{ fontSize: 15, color: 'black' }}>{item.title}</Text>
                                        <Text style={{ color: 'gray' }}>{item.datetime}</Text>
                                        <Text style={{ color: 'gray' }}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }

            />
        </View>
    );
}
