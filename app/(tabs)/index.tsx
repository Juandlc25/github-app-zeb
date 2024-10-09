import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { searchUsers } from "@/services/github";
import { SearchBar } from "@/components/SearchBar";
import { UserCard } from "@/components/UserCard";
import { User } from "@/models/User";
import useDebounce from "@/hooks/useDebounce";
import { Icon } from "@/components/Icon";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import { Header } from "@/components/Header";

export default function HomeScreen() {
  const [debouncedValue, query, setQuery] = useDebounce<string>("", 2000);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (text: string) => setQuery(text);

  const findUsers = async () => {
    if (debouncedValue.length > 0) {
      setLoading(true);
      const results = await searchUsers(debouncedValue);
      setUsers(results);
      setLoading(false);
    } else {
      setUsers([]);
    }
  };

  useEffect(() => {
    findUsers();
  }, [debouncedValue]);

  return (
    <View className="flex-1 border-4 w-full bg-gray-100">
      <Header />
      <View className="p-4 flex-1">
        <SearchBar query={query} onSearch={handleSearch} />
        {loading ? (
          <Loading />
        ) : !query.length || !users?.length ? (
          <EmptyState
            icon={<Icon color={"#6b7280"} name="man" size={48} />}
            subtitle="No results to show"
            title="Search for a user"
          />
        ) : (
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <UserCard user={item} />}
          />
        )}
      </View>
    </View>
  );
}
