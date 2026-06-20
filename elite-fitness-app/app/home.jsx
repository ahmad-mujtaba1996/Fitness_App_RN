import { Image, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      {/* punch line and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
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
        <View className="flex justify-center">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full "
          />
          <View className="bg-neutral-200 rounded-full flex justify-center items-center"></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
