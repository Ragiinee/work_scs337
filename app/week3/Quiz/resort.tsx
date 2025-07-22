import React from 'react';
import { ScrollView, View } from 'react-native';
import Section1 from '../DTO/Section1';
import Section2 from '../DTO/Section2';
import Section3 from '../DTO/Section3';
import Section4 from '../DTO/Section4';
import Section5 from '../DTO/Section5';
import Section6 from '../DTO/Section6';
import Section7 from '../DTO/Section7';
import Section8 from '../DTO/Section8';

export default function Resort() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 24 }}>
            <Section1 />
            <Section2 />
            <Section3 />
            <View style={{ borderBottomWidth: 1, borderTopWidth: 1, paddingVertical: 20, borderColor: '#e0e0e0', marginHorizontal: 20 }}>
                <Section4 />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#e0e0e0', marginHorizontal: 20 }} >
                <Section5 />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#e0e0e0', marginHorizontal: 20, paddingVertical: 20 }} >
                <Section6 />
            </View>
            <Section7 />
            <Section8 />
        </ScrollView >
    );
}
