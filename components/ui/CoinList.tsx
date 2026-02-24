import React from 'react'
import { Pressable, View, Text } from 'react-native'

interface CoinInterface{
    symbol : string
    name : string
    current_price : number
    atl : number
    onPress : ()=>void
    color? : string
}

function CoinList({symbol, name, current_price, atl, onPress, color = '#1A1D27'} : CoinInterface) {

    return (
        <Pressable
            className={` ${color} py-4 rounded-2xl  px-2 `}
            onPress={onPress}
        >
            <View className='flex-row justify-between border-l-4 border border-slate-700 border-l-green-400 p-2 rounded-2xl  '>
                <View className='gap-2'>
                    <Text className='text-white font-bold text-2xl '> {name} </Text>
                    <Text className=' text-gray-400 text-xl '> {symbol.toUpperCase()} </Text>
                </View>

                <View className='gap-2'>
                    <Text className='text-white text-2xl font-bold '> {`$${current_price}`} </Text>
                    <Text className=' text-xl bg-green-200 text-center rounded-xl text-green-700 p-0.5 '> {`+${atl}`} </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CoinList
