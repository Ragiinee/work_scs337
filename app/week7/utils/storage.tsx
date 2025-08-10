import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * ดึงข้อมูลจาก AsyncStorage
 * @param key - ชื่อ key ที่ต้องการดึง
 * @returns - คืนค่าเป็น string หรือ object หรือ null
 */
export const getData = async <T = any>(key: string): Promise<T | string | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log("Loading data:", key, value);
        if (value) {
            try {
                return JSON.parse(value) as T; // ถ้า parse ได้ => object
            } catch {
                return value; // ถ้า parse ไม่ได้ => string
            }
        }
        return null;
    } catch (e) {
        console.error("Error reading data", e);
        return null;
    }
};

/**
 * เก็บข้อมูลลง AsyncStorage
 * @param key - ชื่อ key ที่ต้องการเก็บ
 * @param value - ข้อมูลที่ต้องการเก็บ (string หรือ object)
 */
export const storeData = async (key: string, value: string | object): Promise<void> => {
    try {
        const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
        console.log("Storing data:", key, jsonValue);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error("Error storing data", e);
    }
};

/**
 * ลบข้อมูลจาก AsyncStorage
 * @param key - ชื่อ key ที่ต้องการลบ
 */
export const removeData = async (key: string): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error("Error removing data", e);
    }
};

/**
 * ลบแค่รายการที่เลือกจาก Array ที่เก็บใน AsyncStorage
 * @param key - key ของ array ที่ต้องการแก้ไข (เช่น "todos")
 * @param id - id ของรายการที่จะลบ
 */
export const removeItemById = async (key: string, id: string): Promise<void> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);

        if (jsonValue) {
            let arr = JSON.parse(jsonValue);

            if (Array.isArray(arr)) {
                // กรองเอาเฉพาะที่ id ไม่ตรง
                const updatedArr = arr.filter((item) => item.id !== id);

                // บันทึกกลับไป
                await AsyncStorage.setItem(key, JSON.stringify(updatedArr));
                console.log(`Removed item with id: ${id}`);
            }
        }
    } catch (e) {
        console.error("Error removing item", e);
    }
};
