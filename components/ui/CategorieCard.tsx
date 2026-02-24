import { CategorieCardInterface } from '@/types'
import React from 'react'
import { Pressable, Text } from 'react-native'


function CategorieCard({ title, onPress, color = 'bg-slate-700' }: CategorieCardInterface) {

    return (
        <Pressable
            onPress={onPress}
            className={`${color} border border-slate-700 rounded-full px-5 py-2 active:bg-sky-800 `}
        >
            <Text className='text-slate-400 text-xl '> {title} </Text>
        </Pressable>
    )
}

export default CategorieCard
