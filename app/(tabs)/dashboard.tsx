import {View, Text} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const Dashboard = () => {
    return (
        <View className="flex flex-1 justify-center items-center ">
            <Text className="text-5xl font-bold">Dashboard</Text>
                    <Link href="/signin" className="text-2xl font-bold"> signin </Link>

        </View>
    )
}
export default Dashboard
