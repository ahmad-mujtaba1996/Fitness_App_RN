import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExerciseDetails = () => {
  const item = useLocalSearchParams();
  console.log(item);

  return (
    <SafeAreaView>
      <Text>Exercise Details</Text>
    </SafeAreaView>
  );
};

export default ExerciseDetails;
