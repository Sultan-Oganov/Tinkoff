import React, { FC } from 'react';
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import { Auth, Home, Profile, Payments, Services, Support, More} from '../../screens';
import { useAuth } from '../hooks/useAuth';


const Stack = createNativeStackNavigator();

const RootStack: FC = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    user ?
                        <>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Profile" component={Profile} />
                            <Stack.Screen name="Payments" component={Payments} />
                            <Stack.Screen name="Services" component={Services} />
                            <Stack.Screen name="Support" component={Support} />
                            <Stack.Screen name="More" component={More} />
                        </>
                        : <Stack.Screen name="Auth" component={Auth} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;