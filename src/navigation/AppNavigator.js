import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayList from '../screens/PlayList';
import LoginScreen from '../screens/LoginScreen';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import PlayListDetail from '../screens/PlayListDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const { user } = useAuth()
const PlayListScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='PlayList' component={PlayList} />
            <Stack.Screen name='PlayListDetail' component={PlayListDetail} />
        </Stack.Navigator>
    );
};
const MainScreen = () => {
    return(
        <Tab.Navigator>
        <Tab.Screen
            name='AudioList'
            component={AudioList}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name='headset' size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name='Player'
            component={Player}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name='compact-disc' size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name='PlayList'
            component={PlayListScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name='library-music' size={size} color={color} />
                ),
            }}
        />
    </Tab.Navigator>
    );
}
const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {user ? (
                <Stack.Screen name="Main" component={MainScreen}/>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen}/>
            )

            }

        </Stack.Navigator>
    );
};

export default AppNavigator;
