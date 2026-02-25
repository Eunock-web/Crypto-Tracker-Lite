import CategorieCard from '@/components/ui/CategorieCard';
import CoinList from '@/components/ui/CoinList';
import { useFavorites } from '@/context/FavoritesContext';
import { CoinData } from '@/types';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoinData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();
  const { isFavorite, toggleFavorite, favorites } = useFavorites();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Erreur API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = ['All', 'Top 10', 'Favorites'];

  const filteredData = data.filter((coin) => {
    const matchesSearch = coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Top 10') return coin.market_cap_rank <= 10;
    if (selectedCategory === 'Favorites') return favorites.includes(coin.id);
    return true;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0B0E' }}>
      <View className="px-5 pt-4">
        {/* Header */}
        <View className="flex-row  mb-6">
          <View>
            <Text className="text-white text-3xl font-black">Crypto Tracker</Text>
            <View className="flex-row items-center mt-1">
              <View className="w-2 h-2 rounded-full bg-[#00C853] mr-2" />
              <Text className="text-gray-500 font-bold text-sm">Live Prices</Text>
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View className="bg-[#1A1A22] flex-row items-center px-4 py-3 rounded-3xl border border-gray-800 mb-6">
          <Feather name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-3 text-white text-base"
            placeholder="Search cryptocurrency"
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Categories Section */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {categories.map((cat) => (
              <View key={cat} className="mr-8">
                <CategorieCard
                  title={cat}
                  isActive={selectedCategory === cat}
                  onPress={() => setSelectedCategory(cat)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Main Content */}
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#7B1FA2" />
        </View>
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CoinList
              symbol={item.symbol}
              name={item.name}
              current_price={item.current_price}
              price_change_percentage_24h={item.price_change_percentage_24h}
              index={index}
              isFavorite={isFavorite(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
              onPress={() => {
                router.push({
                  pathname: '/details',
                  params: {
                    id: item.id,
                    name: item.name,
                    symbol: item.symbol,
                    price: item.current_price,
                    rank: item.market_cap_rank,
                    cap: (item.market_cap / 1e9).toFixed(1) + 'B',
                    high: item.high_24h,
                    low: item.low_24h,
                    total: (item.total_supply ? (item.total_supply / 1e6).toFixed(1) + 'M' : 'N/A'),
                    volume: (item.total_volume / 1e9).toFixed(1) + 'B',
                    image: item.image,
                    alt: item.ath
                  }
                })
              }}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}