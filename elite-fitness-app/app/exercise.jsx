import Ionicons from "@react-native-vector-icons/ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-virtualized-view";
import { fetchExerciseByBodyPart } from "../api/exerciseDB";
import { ExerciseList } from "../components/exercise_list";
import { bodyPartResp } from "../constants";

export default function ExeciseDetails() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [getBodyPartList, setBodyPartList] = useState(bodyPartResp);

  useEffect(() => {
    // if (item) getExerciseData(item.name);
  }, [item]);

  const getExerciseData = async (bodyPartName) => {
    let fetchedResponse = await fetchExerciseByBodyPart(bodyPartName);
    setBodyPartList(fetchedResponse);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
        onPress={() => router.back()}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* exercise list */}
      <View className="mx-4 gap-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={getBodyPartList} />
        </View>
      </View>
    </ScrollView>
  );
}
