import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-gray-950 flex-1 items-center justify-center">
      <Text className="text-zinc-50 text-4xl font-bold">Hello Mariana</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}
