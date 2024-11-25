import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerContent from '../../components/Drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={DrawerContent}>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'home' : 'home-outline'} 
                            size={20} 
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="settings"
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'cog' : 'cog-outline'} 
                            size={20} 
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="logout"
                options={{
                    drawerLabel: 'Logout',
                    title: 'Logout',
                    drawerIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name={focused ? 'logout' : 'logout'} 
                            size={20} 
                        />
                    ),
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  );
}
