import { View, Text,Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

const signin = () => {
  return (
    <View className="flex-1 bg-[#22DD8C]" >
        <View className='flex flex-row justify-between mx-6 '>
            <TouchableOpacity
            onPress={() => console.log("Back")}
            >
                    <Image
                    source={images.arrow}
                    className='w-8 h-10 font-bold'
                />
            </TouchableOpacity>
        
        <TouchableOpacity
            onPress={() => console.log("Register")}
        >
            <Text className='text-xl font-bold'>Register</Text>
        </TouchableOpacity>
        
        </View>
        <View className='flex items-center justify-center h-[150]'>
            <Text className='text-5xl font-bold '>
                Sign In
            </Text>
        </View>
        
        <View className='bg-white flex-1 rounded-t-[60] '>
             <View className='gap-y-5 mt-12'>
                
          <TextInput
            placeholder="Email"
            placeholderTextColor="#A9A9A9"
            className="bg-gray-100 h-[64] w-[90%] rounded-lg px-4 text-base"
          />

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            className="bg-gray-100 h-12 rounded-lg px-4 text-base"
          />

             </View>

        </View>
    </View>
  )
}

export default signin