import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Camera, MessageSquare, Search, User, Users } from 'lucide-react-native';

import HomeScreen from '../screens/HomeScreen';
import AICheckScreen from '../screens/AICheckScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import HospitalsScreen from '../screens/HospitalsScreen';
import MyPageScreen from '../screens/MyPageScreen';
import CommunityScreen from '../screens/CommunityScreen';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#0ea5e9', // Example color
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="홈"
                component={HomeScreen}
                options={{ tabBarIcon: ({ color, size }) => <Home color={color} size={size} /> }}
            />
            <Tab.Screen
                name="AI체크"
                component={AICheckScreen}
                options={{ tabBarIcon: ({ color, size }) => <Camera color={color} size={size} /> }}
            />
            <Tab.Screen
                name="상식챗"
                component={ChatbotScreen}
                options={{ tabBarIcon: ({ color, size }) => <MessageSquare color={color} size={size} /> }}
            />
            <Tab.Screen
                name="병원찾기"
                component={HospitalsScreen}
                options={{ tabBarIcon: ({ color, size }) => <Search color={color} size={size} /> }}
            />
            <Tab.Screen
                name="커뮤니티"
                component={CommunityScreen}
                options={{ tabBarIcon: ({ color, size }) => <Users color={color} size={size} /> }}
            />
            <Tab.Screen
                name="마이"
                component={MyPageScreen}
                options={{ tabBarIcon: ({ color, size }) => <User color={color} size={size} /> }}
            />
        </Tab.Navigator>
    );
}
