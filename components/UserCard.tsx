import { User } from "@/models/User";
import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  const openGitHubProfile = () => Linking.openURL(user?.html_url);

  return (
    <View className="flex-row items-center justify-between py-4 border-b border-gray-200 w-full">
      <View className="flex flex-row items-center gap-x-2">
        <TouchableOpacity onPress={openGitHubProfile}>
          <Image
            source={{ uri: user?.avatar_url }}
            className="w-12 h-12 rounded-full"
          />
        </TouchableOpacity>
        <View className="flex flex-col">
          <Text className="text-sm font-normal text-gray-500">#{user?.id}</Text>
          <Text className="text-base font-semibold text-gray-800">
            {user?.login}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={openGitHubProfile}>
        <Text className="text-blue-600 text-base font-medium">
          View Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};
