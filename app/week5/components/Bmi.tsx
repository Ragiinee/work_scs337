import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Bmi() {

    const [Weight, setWeight] = useState('')
    const [Height, setHeight] = useState('')

    const [Bmi, setBmi] = useState('')
    const [bmiCategory, setBmiCategory] = useState('');

    const handlecalculatorBMI = () => {

        if (!Weight || !Height) {
            Alert.alert('You are not input weight or height, Please input here ‼')
            return;
        }

        if (Weight && Height) {
            const numericWeight = parseFloat(Weight);
            const numericHeight = parseFloat(Height) * 0.01;

            const bmiCalculator = numericWeight / (numericHeight * numericHeight);

            setBmi(bmiCalculator.toFixed(2))
        }
    }

    useEffect(() => {
        let Category = ''
        const bmi = Number(Bmi)
        console.log(bmi);

        if (bmi > 0) {
            if (bmi < 18.5 ) {
                Category = 'Underweight'
            }
            else if (bmi >= 18.5 && bmi <= 24.99) {
                Category = "Normal";
            }
            else if (bmi >= 25 && bmi <= 29.99) {
                Category = "Overweight";
            } else if (bmi <= 35) {
                Category = 'Obese'
            }

            setBmiCategory(Category)
            // console.log(Category);
        }



    }, [Bmi])

    return (
        <View>
            {/* ส่วนที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput style={{ fontSize: 20, borderWidth: 2, padding: 4, borderRadius: 10, borderColor: '#bebebe' }}
                    value={Weight}
                    onChangeText={(newWeight) => setWeight(newWeight)}
                    keyboardType="numeric" placeholder="Input Your Weight " />
            </View>

            {/* ส่วนที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput style={{ fontSize: 20, borderWidth: 2, padding: 4, borderRadius: 10, borderColor: '#bebebe' }}
                    value={Height}
                    onChangeText={(newHeight) => setHeight(newHeight)}
                    keyboardType="numeric"
                    placeholder='Input Your Height' />
            </View>

            {/* ส่วนที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <View style={{ flex: 1, backgroundColor: "white", marginRight: 10, height: 100, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                    <Text style={{ fontSize: 20 }}>{Bmi ? Bmi : 'Wait BMI'}</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10, height: 100, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                    <Text style={{ fontSize: 20 }}>{bmiCategory ? bmiCategory : 'Wait BMI'}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <TouchableOpacity
                onPress={handlecalculatorBMI}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}


