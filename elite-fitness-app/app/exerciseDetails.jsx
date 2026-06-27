import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExeciseDetails() {
  const router = useRouter();
  const items = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>{items.name}</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
