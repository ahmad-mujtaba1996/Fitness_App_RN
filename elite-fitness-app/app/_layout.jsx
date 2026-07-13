import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { LogBox } from "react-native";
import "../global.css";

export default function _layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);

  const [fontsLoaded] = useFonts({
    AntDesign: require("@react-native-vector-icons/ant-design/fonts/AntDesign.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercise"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
}
