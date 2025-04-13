import { View, Text,Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { Link } from 'expo-router'

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
            className="bg-gray-100 h-[60] w-[90%] rounded-full mx-4 text-base items-center flex"
          />

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            className="bg-gray-100 h-[60] w-[90%] rounded-full mx-4 text-base items-center flex"
          />
             </View>

             <TouchableOpacity
             onPress={() => console.log("Sign In")}
             className='bg-black h-[60] w-[90%] rounded-full mx-4 items-center flex justify-center mt-10'
             >
                <Text className='text-white font-bold '> Sign In </Text>
             </TouchableOpacity>
            
            
            <Text className='flex self-end items-end mr-2 font-bold mt-2 '
            onPress={()=> console.log("forgot password")}>
            Forgot Password?
            </Text>

            <View className='flex items-center justify-center mt-2 gap-5 m-4'>
                <Text className='flex justify-center items-center mr-2 font-bold mt-2 '
                onPress={()=> console.log("forgot password")}>
                Don't have an account? 
                </Text>

                <TouchableOpacity
                onPress={()=> console.log("Register")}
                className='bg-black h-[60] w-[90%] rounded-full mx-4 items-center flex justify-center'

                >
                <Link href="/register" className='text-[#22DD8C] font-bold'>Register</Link>
                </TouchableOpacity>
            </View>

           

            <View className='gap-y-5 flex-1 items-center justify-center '> 
        <TouchableOpacity 
          className="bg-gray-100 h-[60] w-[90%] rounded-full mx-4 text-base justify-start items-center flex-row gap-4"
          onPress={()=> console.log("Sign in with Google")}>
              <Image
                source={images.google}
                className='w-9 h-9 ml-4 '
            />
            <Text className='text-gray-500 font-bold'>Sign in with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        className="bg-gray-100 h-[60] w-[90%] rounded-full mx-4 text-base justify-start items-center flex-row gap-4"
        onPress={()=> console.log("Sign in with Google")}>
            <Image
                source={images.facebook}
                className='w-10 h-10 ml-4 '
            />
            <Text className='text-gray-500 font-bold'>Sign in with Facebook</Text>
        </TouchableOpacity>
          </View>
          </View>
        </View>
  )
}

export default signin