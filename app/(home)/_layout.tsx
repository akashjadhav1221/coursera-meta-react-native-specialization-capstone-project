import { Stack } from 'expo-router';
import TopHeader from '../../Components/TopHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
        <Stack>
            <Stack.Screen name="index" options={{
                header: () => <TopHeader/>
            }} />
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

    );
}