import { Text, View } from "react-native";

interface Props {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const EmptyState = ({ title, subtitle, icon }: Props) => (
  <View className="flex-1 flex items-center justify-center gap-y-3">
    {icon}
    <View className="flex flex-col gap-y-1 items-center">
      <Text className="text-gray-800 font-semibold text-lg text-center">
        {title}
      </Text>
      <Text className="text-gray-500 font-normal text-sm text-center">
        {subtitle}
      </Text>
    </View>
  </View>
);

export default EmptyState;
