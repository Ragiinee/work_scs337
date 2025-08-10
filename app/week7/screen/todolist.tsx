import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import TodoItem from "../components/TodoItem";
import { getData, removeItemById, storeData } from "../utils/storage";
// import { useNavigation } from '@react-navigation/native';

export default function TodoList() {
    // const navigation = useNavigation();
    const [todos, setTodos] = useState<any>([
        // { id: '1', completed: false, title: "exercise @ 7.00" },
        // { id: '2', completed: false, title: "meeting @ 9.00" },
        // { id: '3', completed: false, title: "go to cinema @ 19.00" },
    ]);

    console.log("TODOS:", todos);

    const onLoad = async () => {
        // READ ITEMS FROM STORAGE
        let data = await getData("todos");
        console.log(data);

        // SET STATE - WRITE CODE HERE
        if (data) {
            setTodos(data as any[]);
        } else {
            setTodos([]);
        }
    };

    useEffect(() => {
        onLoad();
    }, []);

    const saveTodos = async (t: any) => {
        setTodos(t);
        await storeData("todos", JSON.stringify(t));
    };

    const onCreate = async () => {
        let new_data = {
            id: "_" + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title: "", //Empty String
            completed: false,
        };
        //CLONE ARRAY + APPEND NEW DATA INTO ARRAY
        let t = [...todos, new_data];
        //UPDATE STATE
        setTodos(t);

        await saveTodos(t);
        // WRITE ITEM TO STORAGE - WRITE CODE HERE

    };
    const onUpdate = async (new_title: string, id: string) => {
        //CLONE ARRAY FIRST
        let t = [...todos];
        //Find index of specific object using findIndex method.
        let index = t.findIndex((item) => item.id == id);
        //Update object's name property.
        console.log("t:", t[index], id);
        t[index].title = new_title;
        //UPDATE STATE
        setTodos(t);

        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        await saveTodos(t)

    };
    const onCheck = async (id: string) => {
        let t = [...todos];
        let index = t.findIndex((item) => item.id == id);
        //SET INVERSE VALUE BOOLEAN
        t[index].completed = !t[index].completed;
        setTodos(t);

        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        await storeData("todos", t);
    };
    const onDelete = async (id: string) => {
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item) => item.id == id);
        let [removed_t] = t.splice(index, 1);
        console.log(removed_t);
        setTodos(t);

        // REMOVE AN ITEM FROM STORAGE - WRITE CODE HERE
        await removeItemById("todos", id);
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ marginTop: 15 }}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    // <Text>{item.title}</Text>
                    <TodoItem
                        item={item}
                        onUpdate={onUpdate}
                        onCheck={onCheck}
                        onDelete={onDelete}
                    />
                )}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue",
                    padding: 10,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 25,
                    position: "absolute",
                    right: 10,
                    bottom: 10,
                }}
                onPress={onCreate}
            >
                <FontAwesome name="plus" size={26} />
            </TouchableOpacity>
        </View>
    );
}