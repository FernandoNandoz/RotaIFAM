import { Stack } from "expo-router" // importa o estilo de rotas em pilha
import { ImageBackground, StyleSheet } from "react-native" // importa o componente ImageBackground do React Native

// Componente de Layout
export default function Layout() {
    return (
        <ImageBackground source={require("@/assets/background.png")} style={styles.imageBackground}>
            <Stack
                initialRouteName="index/index" // Define a rota inicial como index
                screenOptions={{ 
                    headerShown: false, // Oculta o cabeçalho
                    contentStyle: { backgroundColor: 'transparent' }, // Estilo do conteúdo
                    animation: 'slide_from_right', // Tipo de animação ao navegar para uma nova tela
                    animationDuration: 0, // Duração da animação em milissegundos
                }}>
            </Stack>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
})