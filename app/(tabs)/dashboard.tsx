import {View, Text, FlatList} from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import {Link, Tabs} from "expo-router";
import { TouchableOpacity } from 'react-native';
import {BarChart} from "react-native-chart-kit";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('daily');
    const screenWidth = Dimensions.get("window").width;

    // Different data sets for different time periods
    const dailyData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{ data: [20, 45, 28, 80, 99, 43, 50] }],
        legend: ["Daily Sales"]
    };
    
    const weeklyData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{ data: [120, 145, 128, 180] }],
        legend: ["Weekly Sales"]
    };
    
    const monthlyData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{ data: [320, 445, 528, 480, 599, 543] }],
        legend: ["Monthly Sales"]
    };
    
    const yearlyData = {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [{ data: [1200, 1450, 1680, 1900] }],
        legend: ["Yearly Sales"]
    };
    
    // Get the appropriate data based on active tab
    const getChartData = () => {
        switch(activeTab) {
            case 'weekly': return weeklyData;
            case 'monthly': return monthlyData;
            case 'yearly': return yearlyData;
            default: return dailyData;
        }
    };

    // Chart configuration
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0.5,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 1,
        color: () => `rgba(34, 221, 140, 1)`,
        barPercentage: 1.3,
        barRadiusTop: 16,
        useShadowColorFromDataset: false // optional
      };


      

    return (
        <View className="flex flex-1 items-center">
            <Text className="text-5xl font-bold">Dashboard</Text>
            
            {/* Chart with dynamic data based on selected tab */}
            <BarChart
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginHorizontal: 8
                }}
                data={getChartData()}
                width={screenWidth - 16}
                height={220}
                yAxisLabel="$"
                yAxisSuffix=""
                withInnerLines={false}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />

            <View className="flex-row w-full bg-gray-100 rounded-full my-4 mx-2 overflow-hidden">
                <TouchableOpacity 
                    className={`flex-1 py-3 px-4 items-center ${activeTab === 'daily' ? 'bg-green-300' : ''}`}
                    onPress={() => setActiveTab('daily')}
                >
                    <Text className={activeTab === 'daily' ? 'font-bold' : ''}>Daily</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    className={`flex-1 py-3 px-4 items-center ${activeTab === 'weekly' ? 'bg-green-300' : ''}`}
                    onPress={() => setActiveTab('weekly')}
                >
                    <Text className={activeTab === 'weekly' ? 'font-bold' : ''}>Weekly</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    className={`flex-1 py-3 px-4 items-center ${activeTab === 'monthly' ? 'bg-green-300' : ''}`}
                    onPress={() => setActiveTab('monthly')}
                >
                    <Text className={activeTab === 'monthly' ? 'font-bold' : ''}>Monthly</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    className={`flex-1 py-3 px-4 items-center ${activeTab === 'yearly' ? 'bg-green-300' : ''}`}
                    onPress={() => setActiveTab('yearly')}
                >
                    <Text className={activeTab === 'yearly' ? 'font-bold' : ''}>Yearly</Text>
                </TouchableOpacity>
            </View>
            

            {/* Rest of your component with FlatList */}
            <FlatList 
               data={[
                 {id: '1', title: 'Item 1', date: '2023-08-20', amount: 100, Barcode: '6364752638'},
                 {id: '2', title: 'Item 2', date: '2023-08-21', amount: 50, Barcode: '635648735'},
                 {id: '3', title: 'Item 3', date: '2023-08-22', amount: 75, Barcode: '8467493638'},
                 // Add more items as needed
               ]}
               renderItem={({item}) => (
                <View className='mx-3 my-1 bg-green-300 rounded-3xl '>
                   <View className="p-4 border-b border-gray-200 mx-3 flex flex-col">
                      <Text className='font-bold '>{item.title}</Text>
                      <Text className='font-bold '>Date: {item.date}</Text>
                      <Text className='font-bold '>Amount: ${item.amount}</Text>
                      <Text className='font-bold '>Barcode: {item.Barcode}</Text>
                    </View>
                </View>
                
               )}
               keyExtractor={item => item.id}
               // Optional props
               
               ListHeaderComponent={
                <View className='items-center'>
                  <Text className="p-4 text-center text-xl font-bold">Recent Transactions</Text>
                </View>
              }
               contentContainerStyle={{width: screenWidth}}
             />

        </View>
        
    )
}
export default Dashboard
