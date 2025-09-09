import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"; // Importa as cores definidas no arquivo colors.ts

// Exporta os estilos para o componete solicitante
export const styles = StyleSheet.create({
    container: {
        height: 50, // Altura do botão
        width: '100%', // Largura do botão
        backgroundColor: colors.green[700], // Cor de fundo azul
        borderRadius: 6, // Bordas arredondadas
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },

    title: {
        color: colors.white, // Cor do texto branca
        fontSize: 16, // Tamanho da fonte
        fontWeight: 'bold', // Peso da fonte
    },
});