import { Text, View } from "react-native";

interface DetailCardInterface {
    label: string;
    value: string;
    valueColor?: string;
}

function DetailCard({ label, value, valueColor }: DetailCardInterface) {
    return (
        <View className="bg-[#1A1A22] p-4 rounded-3xl w-[48%] mb-4">
            <Text className="text-gray-500 text-xs font-bold uppercase mb-1">{label}</Text>
            <Text
                className="text-lg font-bold"
                style={valueColor ? { color: valueColor } : { color: 'white' }}
            >
                {value}
            </Text>
        </View>
    )
}

export default DetailCard
