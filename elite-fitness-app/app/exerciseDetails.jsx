import AntDesign from "@react-native-vector-icons/ant-design";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
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
    </View>
  );
};

export default ExerciseDetails;
