import { ScrollView, View } from 'react-native';
import Greeting from './Greeting';

export default function TestGreeting() {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }} >
            <View style={{ alignItems: 'center', top: 50 }}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        </ScrollView >
    );
}
