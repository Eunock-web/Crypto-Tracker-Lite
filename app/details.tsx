import DetailCard from "@/components/ui/DetailCard";
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
// import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Details() {
    const router = useRouter();
    const { name, symbol, price, ran, cap, high, low, total, volume, image, alt } = useLocalSearchParams();

    // Formatting helpers (assuming values are passed as strings or numbers)
    const formattedPrice = price ? `$${parseFloat(price as string).toLocaleString()}` : "$0.00";
    const priceChange = 2.45; // Placeholder since it's not in params, based on image

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0B0B0E' }}>
            <ScrollView className="flex-1 px-4">
                {/* Header */}
                <View className="flex-row justify-between items-center py-4">
                    <Pressable onPress={() => router.back()}>
                        <AntDesign name="left" size={24} color="white" />
                    </Pressable>
                    <Text className="text-white text-lg font-bold">Asset Details</Text>
                    {/* <Pressable>
                        <Ionicons name="share-outline" size={24} color="white" />
                    </Pressable> */}
                </View>

                {/* Asset Header Section */}
                <View className="items-center mt-6">
                    <View className="w-24 h-24 rounded-full bg-[#1A1A22] items-center justify-center p-4 border border-gray-800">
                        <Image
                            source={{ uri: image as string }}
                            className="w-16 h-16"
                            resizeMode="contain"
                        />
                    </View>
                    <Text className="text-white text-4xl font-bold mt-4">{name}</Text>
                    <Text className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">{symbol}</Text>
                </View>

                {/* Price Section */}
                <View className="items-center mt-8">
                    <Text className="text-white text-5xl font-black">{formattedPrice}</Text>
                    <View className="flex-row items-center bg-[#00C85315] px-3 py-1.5 rounded-full mt-4">
                        <SimpleLineIcons name="graph" size={12} color="#00C853" />
                        <Text className="text-[#00C853] font-bold ml-2">+{priceChange}%</Text>
                    </View>
                </View>

                {/* Grid Section */}
                <View className="flex-row flex-wrap justify-between mt-10">
                    <DetailCard label="RANK" value={`#${ran || '1'}`} />
                    <DetailCard label="MARKET CAP" value={`$${cap || '0.0B'}`} />
                    <DetailCard label="24H HIGH" value={`$${high || '0'}`} valueColor="#00C853" />
                    <DetailCard label="24H LOW" value={`$${low || '0'}`} valueColor="#FF5252" />
                </View>

                {/* Market Activity Section */}
                <View className="mt-6 mb-10">
                    <Text className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4">MARKET ACTIVITY</Text>
                    <View className="bg-[#1A1A22] rounded-3xl overflow-hidden">
                        <View className="flex-row justify-between p-4 border-b border-gray-800">
                            <Text className="text-gray-400">Circulating Supply</Text>
                            <Text className="text-white font-bold">{total || '0'} {symbol}</Text>
                        </View>
                        <View className="flex-row justify-between p-4 border-b border-gray-800">
                            <Text className="text-gray-400">Trading Volume</Text>
                            <Text className="text-white font-bold">${volume || '0'}</Text>
                        </View>
                        <View className="flex-row justify-between p-4">
                            <Text className="text-gray-400">All-time High</Text>
                            <Text className="text-white font-bold">${alt || '0'}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <View className="px-4 pb-6 pt-2 bg-[#0B0B0E]">
                <Pressable
                    onPress={() => { }}
                    className="bg-[#7B1FA2] flex-row items-center justify-center p-4 rounded-3xl"
                    style={{
                        shadowColor: "#7B1FA2",
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.3,
                        shadowRadius: 20,
                        elevation: 10
                    }}
                >
                    <EvilIcons name="star" size={28} color="white" />
                    <Text className="text-white font-black text-lg ml-2"> Add to Favorites </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Details
