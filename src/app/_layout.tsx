import { Stack } from 'expo-router';
import { colors, fontFamily } from '@/styles/theme';

import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
} from '@expo-google-fonts/rubik';

import { Loading } from '@/components/loading';

export default function Layout() {
    const [fonstLoaded] =useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
    })

    if(!fonstLoaded){
        return <Loading />
    }

    return <Stack 
    screenOptions={{ 
        headerShown: false, 
        contentStyle: { 
        backgroundColor: colors.gray[100]
        }
    }} />
}