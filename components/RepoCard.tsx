import { Repo } from "@/models/Repo";
import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Icon } from "./Icon";

type Props = {
  repo: Repo;
};

export const RepoCard = ({ repo }: Props) => {
  const openGitHubRepo = () => Linking.openURL(repo?.html_url);

  return (
    <View className="flex-row items-center justify-between py-4 border-b border-gray-200 w-full gap-y-1">
      <View className="flex flex-col w-2/4">
        <TouchableOpacity onPress={openGitHubRepo}>
          <Text className="text-blue-600 text-base font-medium">
            {repo?.name}
          </Text>
        </TouchableOpacity>
        <Text numberOfLines={2} className="text-xs font-normal text-gray-500">
          {repo?.description}
        </Text>
      </View>
      <View className="flex flex-col gap-y-1">
        <View className="flex flex-row-reverse gap-x-2 items-center">
          <View className="flex flex-row gap-x-1 items-center">
            <Icon color={"#6b7280"} name="eye" size={20} />
            <Text className="text-xs font-normal text-gray-500">
              {repo?.watchers}
            </Text>
          </View>
          <View className="flex flex-row gap-x-1 items-center">
            <Icon color={"#6b7280"} name="share-social" size={20} />
            <Text className="text-xs font-normal text-gray-500">
              {repo?.forks}
            </Text>
          </View>
        </View>
        <View className="flex flex-row-reverse gap-x-1 items-center">
          <Icon color={"#6b7280"} name="man" size={20} />
          <Text className="text-xs font-normal text-gray-500">
            {repo?.owner?.login}
          </Text>
        </View>
      </View>
    </View>
  );
};
