import React from "react";
import { ScrollView, View } from "react-native";
import Cover from "./components/Cover";
import Event from "./components/Event";
import HomeIconMenu from "./components/HomeIconMenu";
import Tour from "./components/Tour";
import TourFlatList from "./components/TourFlatList";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Cover />
                <HomeIconMenu />
                <Tour style={{ margin: 20 }} />
                <TourFlatList style={{ margin: 20 }} />
                <Event style={{ margin: 20 }} />
            </View>
        </ScrollView>

    );
}

