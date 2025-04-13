import { View, Text,TouchableOpacity, ImageBackground,Image } from 'react-native'
import React from 'react'
import {images} from "@/constants/images"


const welcome = () => {

  return (
        <ImageBackground 
        source={images.background}
        className='flex-1'
        >
            <View className=' flex items-center mt-72'>
            <Image
            source = {images.splashIcon}
            className = 'size-24'
            />
            <Text className='text-5xl font-bold '>
                BENO
            </Text>
            </View>

            <View className='flex flex-row gap-10 bottom-10 items-center justify-center w-full space-x-4 absolute '>
                <TouchableOpacity
                    className= "bg-[#F2F2F2] h-[60] w-[150] rounded-full flex justify-center items-center"
                    onPress={() => console.log("Sign Up")}
                >
                    <Text className='text-xl font-bold text-black'>Sign In</Text> 
                </TouchableOpacity>

                <TouchableOpacity
                    className= "bg-[#000000] h-[60] w-[150] rounded-full flex justify-center items-center"
                    onPress={() => console.log("Sign In")}
                >
                    <Text className='text-xl font-bold text-white'>Sign Up</Text> 
                </TouchableOpacity>
                </View>    
           
           
        </ImageBackground>
  )
}

export default welcome