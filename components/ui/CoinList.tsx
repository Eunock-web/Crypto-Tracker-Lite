import { TwoLetter } from '@/scripts/function'
import React from 'react'
import { Pressable, View, Text } from 'react-native'

interface CoinInterface {
    symbol: string
    name: string
    current_price: number
    atl: number
    onPress: () => void
    color?: string
    letterColor? : string
    textColor? : string
}

function CoinList({ symbol, name, current_price, atl, onPress, color = '#1A1D27', letterColor = 'border-blue-200 bg-blue-200', textColor = 'text-blue-700' }: CoinInterface) {

    return (
        <Pressable
            className={` ${color} py-4 rounded-2xl  px-2 `}
            onPress={onPress}
        >
            <View className='flex-row justify-between border-l-4 border bg-gray-800 border-slate-800 border-l-green-400 p-2 rounded-2xl  '>
                <View className='flex-row gap-2 '>
                    <View className='mt-2'>
                        <Text className={` ${letterColor}  border py-2 px-1 rounded-full text-2xl ${textColor} `}> {TwoLetter(symbol).toUpperCase()} </Text>
                    </View>

                    <View className='gap-2'>
                        <Text className='text-white font-bold text-2xl '> {name} </Text>
                        <Text className='  text-gray-400 text-xl '> {symbol.toUpperCase()} </Text>
                    </View>
                </View>

                <View className='gap-2'>
                    <Text className='text-white text-2xl font-bold '> {`$${current_price}`} </Text>
                    <Text className=' text-xl bg-green-800 text-center rounded-xl text-green-300  p-0.5 '> {`+${atl}`} </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CoinList
