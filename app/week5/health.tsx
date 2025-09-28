import React from "react";

// import components
import { ScrollView } from "react-native";
import Bmi from "./components/Bmi";
import Heartbeat from "./components/Heartbeat";

export default function Health() {
    return (
        <ScrollView style={{ flex: 1 , backgroundColor : 'lightblue', padding : 20 }}>
            <Bmi  />
            <Heartbeat  />
        </ScrollView>
    );
}
