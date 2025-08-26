import { Stack } from "expo-router"

import { colors } from "@/styles/colors"

export default function Layout() {
    const backgroundColor = colors.green[900]

    return (
        <Stack 
            screenOptions={{ 
                headerShown: false, headerStyle: { backgroundColor }
            }}
        >
            <Stack.Screen name="index" options={{ title: "RotaIFAM" }} />
        </Stack>
    )
}