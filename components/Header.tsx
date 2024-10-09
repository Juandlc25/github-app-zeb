import React from "react";

import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  backgroundColor?: string;
};

export const Header = ({ backgroundColor = "rgb(1, 1, 1)" }: Props) => (
  <SafeAreaView style={{ backgroundColor }}>
    <StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
    <View>
      <Text className="text-white text-lg font-bold text-center">
        Zebrands Github App
      </Text>
    </View>
  </SafeAreaView>
);
