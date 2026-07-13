import AntDesign from "@react-native-vector-icons/ant-design";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { baseUrl } from "../api/exerciseDB";
import { rapidApiKey } from "../constants";

const ExerciseDetails = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  console.log(item);

  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-bg-[40px]">
        <Image
          source={{
            uri: `${baseUrl}/image?exerciseId=${item.id}&resolution=180`,
            method: "GET", // Optional: defaults to 'GET'
            headers: {
              "X-RapidAPI-Key": rapidApiKey,
              "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
          }}
          contentFit="cover"
          style={{
            width: wp(100),
            height: wp(100),
            borderBottomRightRadius: hp(5),
            borderBottomLeftRadius: hp(5),
          }}
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="mx-5 absolute rounded-full right-0"
        >
          <AntDesign
            name="close-circle"
            size={hp(4.5)}
            color="#f43f5e"
            style={{ marginTop: hp(5) }}
          />
        </TouchableOpacity>
      </View>

      {/* Exercise Details */}
      <ScrollView
        className="mx-4 gap-y-2 mt-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(400).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Equipment{": "}
          <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Secondary Muscles{": "}
          <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Target{": "}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(2.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Instructions{":"}
        </Animated.Text>
        {item?.instructions.split(",").map((instruction, index) => {
          return (
            <Animated.Text
              entering={FadeInDown.delay((index + 6) * 100)
                .duration(300)
                .springify()}
              key={instruction}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800"
            >
              {instruction}
            </Animated.Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ExerciseDetails;
