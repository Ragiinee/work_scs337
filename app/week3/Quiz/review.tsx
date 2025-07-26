import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

const reviewData = [
    {
        id: 1,
        user: 'Grigory Kozhukhov',
        comment: 'Nice Place',
        commentoutlet: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
        img: require('@/assets/week3/profile-3.jpg'),
        datetime: 'Jun 2018'
    },
    {
        id: 2,
        user: 'Ea Tipene',
        comment: 'Great for families',
        commentoutlet: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
        img: require('@/assets/week3/profile-4.jpg'),
        datetime: 'Jun 2018'
    }
]

const range = [
    { id: 1, star: 5, progress: 0.6 },
    { id: 2, star: 4, progress: 0.1 },
    { id: 3, star: 3, progress: 0.3 },
    { id: 4, star: 2, progress: 0.4 },
    { id: 5, star: 1, progress: 0.7 }
]

export default function Review() {
    const progress = 0.6;

    return (
        <ScrollView style={{ padding: 20, backgroundColor: '#fff', flex: 1 }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <Link href={'/week3/layout'}>
                    <FontAwesome name="arrow-left" size={30} color="#e5654f" />
                </Link>

                <Text style={{ fontSize: 24, fontWeight: '400', color: 'black' }}>
                    Reviews
                </Text>

                <Text style={{ fontSize: 24, fontWeight: '400', color: '#e5654f' }}>
                    Replay
                </Text>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                {/* ฝั่งซ้าย: คะแนนรวม */}
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 56, fontWeight: '400', color: '#e5634d' }}>4.7</Text>
                    <Text style={{ fontSize: 20, color: '#666' }}>out of 5</Text>
                </View>

                {/* ฝั่งขวา: range ของดาว + progress */}
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {
                        range.map((item) => (
                            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* ดาว */}
                                <View style={{ width: 90, }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        {[...Array(item.star)].map((_, index) => (
                                            <FontAwesome key={index} name='star' size={18} color='#b3b3b3' />
                                        ))}
                                    </View>
                                </View>

                                {/* Progress bar */}
                                <View style={{
                                    flex: 1,
                                    height: 8,
                                    backgroundColor: '#f6f6f6',
                                    borderRadius: 4,
                                    marginLeft: 10
                                }}>
                                    <View style={{
                                        width: `${item.progress * 100}%`,
                                        backgroundColor: '#e5634d',
                                        height: '100%',
                                        borderRadius: 4
                                    }} />
                                </View>
                            </View>
                        ))
                    }
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 18, color: 'black', textAlign: 'right', fontWeight: 'bold', fontStyle: 'italic' }} >25</Text>
                        <Text style={{ fontSize: 18, color: 'black', textAlign: 'right', fontWeight: 'bold' }} > Ratings</Text>
                    </View>
                </View>
            </View>


            {/* Reviews List */}
            {reviewData.map((item) => (
                <View key={item.id} style={{ flexDirection: 'column', marginBottom: 20, backgroundColor: '#f5f5f5', padding: 12, borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 12 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                            <Image
                                source={item.img}
                                style={{ width: 60, height: 60, borderRadius: 30, marginRight: 12 }}
                            />
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 20, fontWeight: '500', color: '#333' }}>{item.user}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <FontAwesome name="star" size={16} color="#fdc70d" />
                                    <FontAwesome name="star" size={16} color="#fdc70d" />
                                    <FontAwesome name="star" size={16} color="#fdc70d" />
                                    <FontAwesome name="star" size={16} color="#fdc70d" />
                                    <FontAwesome name="star-o" size={16} color="#fdc70d" />
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 14, color: '#999', marginBottom: 6 }}>{item.datetime}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginBottom: 4 }}>
                            {item.comment}
                        </Text>
                        <Text style={{ fontSize: 14, color: '#c9c9c9' }}>{item.commentoutlet}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}