import { Stack } from 'expo-router';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getItem } from '../../utils/asyncStorage';
import { useEffect, useState } from 'react';
import React from 'react';
import OnboardingFlow from './(modal)/onboarding-flow';

export default function Layout() {

    const [isOnboarded, setIsOnboarded] = useState(null);

    useEffect(() => {
        checkifOnboarded();
    }, []);

    const checkifOnboarded = async () => {
        const onboarded = await getItem('isOnboarded');
        if (onboarded === '1') {
            setIsOnboarded(true);
        } else{
            setIsOnboarded(false);
        }
    };

    if (isOnboarded === null || isOnboarded === undefined) {
        return null;
    } 
    
    if (isOnboarded) {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
            <Stack>
                <Stack.Screen name="index" />
                <Stack.Screen name="(modal)/filter" 
                options={{
                    presentation: 'modal',
                    headerTitle: 'Filter',
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: 'transparent'
                    }
                }}/>
                <Stack.Screen name='(modal)/cart'
                options={{
                    presentation: 'fullScreenModal',
                    headerTitle: 'Cart'
                }}
                />
                <Stack.Screen name="(modal)/location-search"
                options={{
                    presentation: 'modal',
                    headerTitle: 'Location Search'
                }}
                >
                </Stack.Screen> 
                <Stack.Screen name="(modal)/details"
                options={{
                    presentation: 'modal',
                    headerTitle: 'Details'
                }}
                >
                </Stack.Screen>  
            </Stack>
            </BottomSheetModalProvider>
            </GestureHandlerRootView>
        )
    } else {
        return (
            <>
            <OnboardingFlow />
            </>
        )
    }
}