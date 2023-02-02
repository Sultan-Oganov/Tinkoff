import React, { FC, useEffect } from 'react';
// React Navigation
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import { Auth, Home, Profile, Payments, Services, Support, More } from '../../screens';
import { useAuth } from '../hooks/useAuth';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const RootStack: FC = () => {
    const { user } = useAuth();
    const ref = useNavigationContainerRef();
    const [name, setName] = useState<string | undefined>(undefined);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setName(ref.getCurrentRoute()?.name);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const listener = ref.addListener('state', () => setName(ref.getCurrentRoute()?.name));

        return () => ref.removeListener('state', listener);
    }, []);

    return (
        <>
            <NavigationContainer ref={ref}>
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
            {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
        </>
    );
};

export default RootStack;