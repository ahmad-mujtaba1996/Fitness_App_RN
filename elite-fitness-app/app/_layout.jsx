import { Stack } from "expo-router";
import "../global.css";

export default function _layout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
}
