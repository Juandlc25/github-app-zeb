import { View, FlatList } from "react-native";
import { useEffect, useState } from "react";

import { SearchBar } from "@/components/SearchBar";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import { Icon } from "@/components/Icon";
import useDebounce from "@/hooks/useDebounce";
import { Repo } from "@/models/Repo";
import { searchRepositories } from "@/services/github";
import { RepoCard } from "@/components/RepoCard";
import { Header } from "@/components/Header";

export default function TabTwoScreen() {
  const [debouncedValue, query, setQuery] = useDebounce<string>("", 3000);

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (text: string) => setQuery(text);

  const findRepos = async () => {
    if (debouncedValue.length > 2) {
      setLoading(true);
      const results = await searchRepositories(debouncedValue);
      setRepos(results);
      setLoading(false);
    } else {
      setRepos([]);
    }
  };

  useEffect(() => {
    findRepos();
  }, [debouncedValue]);

  return (
    <View className="flex-1 border-4 w-full bg-gray-100">
      <Header />
      <View className="p-4 flex-1">
        <SearchBar query={query} onSearch={handleSearch} />
        {loading ? (
          <Loading />
        ) : !query.length || !repos?.length ? (
          <EmptyState
            icon={<Icon color={"#6b7280"} name="code-slash" size={48} />}
            subtitle="No results to show"
            title="Please find a github repository"
          />
        ) : (
          <FlatList
            data={repos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <RepoCard repo={item} />}
          />
        )}
      </View>
    </View>
  );
}
