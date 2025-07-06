import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Card from '../DTO/Card';
import Hotel from '../DTO/Hotel';
import Menu from '../DTO/Menu';
import Signup from "../DTO/Signup";


export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Text style={{ display: 'flex', justifyContent: 'center', fontSize: 20, textAlign: 'center', fontWeight: 600 }}>Week 3</Text>
                <Menu />
                <Card />
                <Hotel />
                <Signup />
            </View>
        </ScrollView>
    );
}
