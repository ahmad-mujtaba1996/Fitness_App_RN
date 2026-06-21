import { Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { sliderImages } from "../constants";

const PAGE_WIDTH = wp(100);
const PAGE_HEIGHT = hp(25);

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      autoPlay={true}
      autoPlayInterval={4000}
      defaultIndex={1}
      width={PAGE_WIDTH}
      height={PAGE_HEIGHT}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 80,
      }}
      renderItem={ItemCard}
    />
  );
}

const ItemCard = ({ item }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          height: "100%",
          borderRadius: 30,
          overflow: "hidden",
        }}
      >
        <Image
          source={item}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};
