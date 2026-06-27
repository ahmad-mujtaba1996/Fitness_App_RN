import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Image, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageSlider from "../components/image_slider";
import BodyParts from "../components/body_parts";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex gap-y-5" edges={["top"]}>
      {/* punch line and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="gap-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center gap-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full "
          />
          <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ width: hp(5.5), height: hp(5.5) }}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>
      {/* Image Slider */}
      <View>
        <ImageSlider />
      </View>
     {/* Body Parts List */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
