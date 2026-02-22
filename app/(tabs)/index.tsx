import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex : 1}} className='bg-sky-800'>
      <View className='flex-1 justify-center items-center'>
        <Text className='text-center text-white'> Je suis un texte </Text>
      </View>
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({});
