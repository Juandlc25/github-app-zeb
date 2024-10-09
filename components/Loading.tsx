import { ActivityIndicator, View } from "react-native";

const Loading = () => (
  <View className="flex-1 flex items-center justify-center">
    <ActivityIndicator size="large" />
  </View>
);

export default Loading;
