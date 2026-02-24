import { CategorieCardInterface } from '@/types'
import React from 'react'
import { Pressable, Text } from 'react-native'


function CategorieCard({ title, onPress, color = 'bg-[#1A1A22]', isActive }: CategorieCardInterface) {

    return (
        <Pressable
            onPress={onPress}
            className={`${isActive ? 'bg-[#7B1FA2]' : color} border border-gray-800 rounded-full px-6 py-2.5 active:opacity-70`}
        >
            <Text className={`${isActive ? 'text-white' : 'text-gray-400'} text-lg font-bold`}> {title} </Text>
        </Pressable>
    )
}

export default CategorieCard
