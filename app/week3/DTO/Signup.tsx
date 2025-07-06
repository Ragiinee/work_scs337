import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Signup() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Sign up Form</Text>
            <TextInput style={{ fontSize: 20, marginTop: 10 ,borderWidth:2 ,borderRadius:40 ,paddingVertical:10 ,borderColor:'#dedede'}} placeholder="Input ID" />
            <TextInput style={{ fontSize: 20, marginTop: 10 ,borderWidth:2 ,borderRadius:40 ,paddingVertical:10 ,borderColor:'#dedede'}} placeholder="Input Email" />
            <TextInput style={{ fontSize: 20, marginTop: 10, marginBottom: 10,borderWidth:2 ,borderRadius:40 ,paddingVertical:10 ,borderColor:'#dedede' }} placeholder="Input Address" />
            <Button title="Sign up" color="red" />
        </View>
    );
}
