import {View, Text, ImageBackground, Image} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {images} from "@/constants/images"


const _Layout = () => {

    const TabsIcon = ({icon, title ,focused}:any)=> {
        if (focused) {
            return (
                <ImageBackground
                    source={images.highlight2}
                    className="flex w-full flex-1 min-w-[112px] min-h-16 rounded-full overflow-hidden mt-2 justify-center items-center ease-in duration-700 h-full"
                >
                    <Image
                        source={icon}
                        className="size-5"
                    />
                    <Text className="font-semibold">{title}</Text>
                </ImageBackground>
            )
        }
            return (
                <View>
                    <Image
                    source={icon}
                    className="size-5 justify-center items-center mt-4  overflow-hidden  ease-in duration-700">

                    </Image>
                </View>
            )
    }
    return (
        <Tabs
        screenOptions={{
                tabBarShowLabel: false,
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle:{

                borderRadius: 50,
                marginHorizontal:10,
                marginBottom:20,
                height:50,
                overflow:"hidden",
                position:"absolute",
                borderColor: "74E8AE"
            }
            }}>
            <Tabs.Screen
                name = "dashboard"
                options={{
                    title: "dashboard",
                    headerShown: false,

                    tabBarIcon: ({focused}) => (
                        <>
                        <TabsIcon
                            focused={focused}
                            title = "Dashboard"
                            icon ={images.dashboard}
                            />
                        </>
                        ),
            }}
            />
            <Tabs.Screen
                name = "scan"
                options={{
                    title: "Scan",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <>
                            <TabsIcon
                                focused={focused}
                                title = "Scan"
                                icon ={images.scan}
                            />
                        </>
                    ),
                }}
            />
            <Tabs.Screen
                name = "inventory"
                options={{
                    title: "Inventory",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <>
                            <TabsIcon
                                focused={focused}
                                title = "Inventory"
                                icon ={images.inventory}
                            />
                        </>
                    ),
            }}
            />
            <Tabs.Screen
                name = "profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <>
                            <TabsIcon
                                focused={focused}
                                title = "Profile"
                                icon ={images.profile}
                            />
                        </>
                    ),
            }}
            />
        </Tabs>
    )
}
export default _Layout
