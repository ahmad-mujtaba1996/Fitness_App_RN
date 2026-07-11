import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { FlatList, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { baseUrl } from "../api/exerciseDB";
import { rapidApiKey } from "../constants";

export const ExerciseList = ({ data }) => {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
};

const ExerciseCard = ({ item, router, index }) => {
  return (
    <View>
      <TouchableOpacity className="flex py-3 gap-y-2">
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{
              uri: `${baseUrl}/image?exerciseId=${item.id}&resolution=180`,
              method: "GET", // Optional: defaults to 'GET'
              headers: {
                "X-RapidAPI-Key": rapidApiKey,
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
              },
            }}
            style={{ width: wp(44), height: wp(52) }}
            contentFit="cover"
            onError={(e) => console.log("Image error:", e.error)}
            onLoad={() => console.log("Image loaded")}
            className="rounded-[25px]"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
