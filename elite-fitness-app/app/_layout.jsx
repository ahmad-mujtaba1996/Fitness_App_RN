import { Stack } from "expo-router";
import { LogBox } from "react-native";
import "../global.css";

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
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
