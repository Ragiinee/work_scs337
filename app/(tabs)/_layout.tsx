import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const buttonLinlkpage = [
  {
    titleId: 1,
    title: 'แบบผึก EP 02',
    Page: '/ep02/layout'
  }
]


export default function Index() {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center",
      }}
    >
      <Text style={styles.TextH1}>My work as SCS337 การพัฒนาแอปพลิเคชันบนอุปกรณ์เคลื่อนที่</Text>
      <Text style={styles.TextH3}>Mr.Nopparat Muneeupatham 65222420005</Text>

      {
        buttonLinlkpage.map((item: any) =>
        (
          <TouchableOpacity
            key={item.titleId}
            style={styles.buttonColor}
            onPress={() => router.push(item.Page)}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: 'center' }}>{item.title}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}

export const styles = StyleSheet.create({
  TextH1: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    padding: 20,
    fontSize: 32,
    color: '#78917d',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  TextH3: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    padding: 20,
    fontSize: 24,
    color: '#442315',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonColor: {
    padding: 16,
    paddingHorizontal: 80,
    margin: 12,
    backgroundColor: '#db526b',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: 100,
    width: 400
  }
});
