import CoinList from '@/components/ui/CoinList';
import { useFavorites } from '@/context/FavoritesContext';
import { CoinData } from '@/types';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Favoris() {
    const { favorites, isFavorite, toggleFavorite } = useFavorites();
    const [allCoins, setAllCoins] = useState<CoinData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (favorites.length === 0) return;
        const fetchFavoritedCoins = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1'
                );
                const json = await response.json();
                setAllCoins(json);
            } catch (error) {
                console.error('Error fetching coins:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchFavoritedCoins();
    }, [favorites.length]);

    const favoritedCoins = allCoins.filter((coin) => favorites.includes(coin.id));

    if (isLoading) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0B0E' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#7B1FA2" />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0B0E' }}>
            {/* Header */}
            <View className="px-5 pt-4 flex-row justify-between items-center mb-6">
                <Text className="text-white text-3xl font-black">Favorites</Text>
                <View className="bg-[#1A1A22] p-2.5 rounded-2xl border border-gray-800">
                    <Feather name="search" size={20} color="white" />
                </View>
            </View>

            {favorites.length === 0 ? (
                /* Empty State */
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 }}>
                    {/* Circle with star */}
                    <View
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 60,
                            borderWidth: 2,
                            borderColor: '#7B1FA2',
                            borderStyle: 'dashed',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 32,
                            backgroundColor: '#1A0A2E',
                        }}
                    >
                        <FontAwesome name="star" size={48} color="#7B1FA2" />
                    </View>

                    <Text className="text-white text-2xl font-bold text-center mb-3">
                        No favorites yet
                    </Text>
                    <Text className="text-gray-500 text-sm text-center leading-6 mb-10">
                        Star your favorite cryptos to see them here and track their performance.
                    </Text>

                    {/* Explore Button */}
                    <Pressable
                        className="bg-[#7B1FA2] px-8 py-4 rounded-full flex-row items-center gap-2"
                        onPress={() => router.push('/')}
                        style={({ pressed }) => ({
                            backgroundColor: pressed ? '#6A1B9A' : '#7B1FA2',
                            paddingHorizontal: 32,
                            paddingVertical: 16,
                            borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10,
                        })}
                    >
                        <Feather name="compass" size={18} color="white" />
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
                            Explore Market
                        </Text>
                    </Pressable>
                </View>
            ) : (
                /* Favorites List */
                <FlatList
                    data={favoritedCoins}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 60 }}>
                            <ActivityIndicator size="large" color="#7B1FA2" />
                        </View>
                    }
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
                                        alt: item.ath,
                                    },
                                });
                            }}
                        />
                    )}
                />
            )}
        </SafeAreaView>
    );
}
