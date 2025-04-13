import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-bold">BEN</Text>
        <Link href="/(tabs)/dashboard" className="text-2xl font-bold"> TO APP </Link>
        <Link href="/welcome" className="text-2xl font-bold"> welcome </Link>
    </View>
  );
}