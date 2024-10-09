import React from "react";
import { Tabs } from "expo-router";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Icon } from "@/components/Icon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "User search",
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "man" : "man-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="repo-search"
        options={{
          title: "Repo search",
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
