import React from "react";
import { TextInput, View } from "react-native";
import { Icon } from "./Icon";

type Props = {
  query: string;
  onSearch: (query: string) => void;
};

export const SearchBar = ({ query, onSearch }: Props) => (
  <View className="w-full border border-gray-300 flex items-center flex-row rounded p-1">
    <Icon color={"#6b7280"} name="search" size={24} />
    <TextInput
      value={query}
      onChangeText={onSearch}
      className="h-10 text-gray-800 placeholder:text-gray-500 bg p-2 rounded"
      placeholder="Search..."
      placeholderTextColor={"#6b7280"}
    />
  </View>
);
