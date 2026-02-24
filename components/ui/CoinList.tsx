import { TwoLetter } from '@/scripts/function'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

interface CoinInterface {
    symbol: string
    name: string
    current_price: number
    price_change_percentage_24h: number
    onPress: () => void
    index?: number
}

function CoinList({ symbol, name, current_price, price_change_percentage_24h, onPress, index = 0 }: CoinInterface) {
    const isPositive = price_change_percentage_24h >= 0;

    // Alternating border colors as seen in the image
    const borderColors = ['border-l-[#00C853]', 'border-l-[#FF5252]', 'border-l-[#00C853]', 'border-l-[#FF5252]'];
    const borderColor = borderColors[index % borderColors.length];

    // Background color for the initial icon
    const iconBgColors = ['bg-[#FF8F0020]', 'bg-[#1E88E520]', 'bg-[#9C27B020]', 'bg-[#1E88E520]'];
    const iconTextColors = ['text-[#FF8F00]', 'text-[#1E88E5]', 'text-[#9C27B0]', 'text-[#1E88E5]'];
    const iconBg = iconBgColors[index % iconBgColors.length];
    const iconText = iconTextColors[index % iconTextColors.length];

    return (
        <Pressable
            className="mb-4"
            onPress={onPress}
        >
            <View className={`flex-row justify-between items-center bg-[#1A1A22] p-4 rounded-3xl border-l-[3px] ${borderColor}`}>
                <View className="flex-row items-center flex-1">
                    {/* Icon with initials */}
                    <View className={`w-12 h-12 rounded-full ${iconBg} items-center justify-center`}>
                        <Text className={`${iconText} font-bold text-lg`}>
                            {TwoLetter(symbol).toUpperCase()}
                        </Text>
                    </View>

                    <View className="ml-3">
                        <Text className="text-white font-bold text-lg">{name}</Text>
                        <Text className="text-gray-500 text-xs font-bold uppercase tracking-widest">{symbol.toUpperCase()}</Text>
                    </View>
                </View>

                <View className="items-end">
                    <View className="flex-row items-center">
                        <Text className="text-white text-lg font-bold">
                            ${(current_price ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </Text>
                        <FontAwesome name="star" size={12} color="#FFD600" style={{ marginLeft: 4 }} />
                    </View>
                    <Text className={`text-xs font-bold mt-1 ${isPositive ? 'text-[#00C853]' : 'text-[#FF5252]'}`}>
                        {isPositive ? '+' : ''}{(price_change_percentage_24h ?? 0).toFixed(2)}%
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CoinList
