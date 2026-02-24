import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, ActivityIndicator } from 'react-native'; // Import correct
import { SafeAreaView } from 'react-native-safe-area-context';
import CategorieCard from '@/components/ui/CategorieCard';
import { CoinData } from '@/types';
import CoinList from '@/components/ui/CoinList';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoinData[]>([]);

  useEffect(() => {
    // On définit la fonction à l'intérieur ou à l'extérieur, mais on l'appelle proprement
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1');
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

  return (
    <SafeAreaView style={{ flex: 1 }} className='bg-slate-900'>
      <View className='mt-10 mx-4'>
        {/* Ton Header (inchangé) */}
        <View className='items-center gap-3 mb-8'>
          <Text className='font-bold text-4xl text-white'>Crypto Tracker</Text>
          <View className='flex-row items-center gap-2'>
            <View className='bg-green-400 w-2 h-2 rounded-full shadow-lg shadow-green-400' />
            <Text className='text-gray-400 text-lg'>Live Prices</Text>
          </View>
        </View>

        {/* Section Catégories */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 50 }}>
            <CategorieCard title='All' onPress={() => { }} />
            <CategorieCard title='Top 10' onPress={() => { }} />
            <CategorieCard title='Favoris' onPress={() => { }} />
          </ScrollView>
        </View>
      </View>

      {/* Affichage conditionnel : Spinner ou Liste */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#6C63FF" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
          renderItem={({ item }) => (
            <CoinList
              symbol={item.symbol}
              name={item.name}              
              atl={item.atl} 
              current_price={item.current_price}
              onPress={()=>{}}              
              />
          )}
        />
      )}
    </SafeAreaView>
  );
}