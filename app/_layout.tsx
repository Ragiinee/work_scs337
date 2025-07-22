import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack >
      <Stack.Screen
        name="week3/Quiz/resort"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="week3/Quiz/review"
        options={{
          headerShown: false,
        }}
      />
    </Stack >
  );
}
