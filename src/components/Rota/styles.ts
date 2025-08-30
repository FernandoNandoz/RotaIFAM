import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"; // Importa as cores definidas no arquivo colors.ts

// Exporta os estilos para o componete solicitante
export const styles = StyleSheet.create({
    // Estilo do container da rota
    container: {
        flexDirection: 'row',  // Direção dos itens em linha
        alignItems: 'center',  // Alinha os itens ao centro na vertical
        gap: 6,  // Espaçamento entre os itens
        height: 34,  // Altura do container
        backgroundColor: colors.gray[100],  // Cor de fundo cinza
        borderRadius: 28,  // Bordas arredondadas
        paddingHorizontal: 14,  // Espaçamento horizontal interno
    },

    // Estilo do nome da rota
    name: {
        color: colors.white,  // Cor do texto branca
        fontSize: 18,  // Tamanho da fonte
        fontWeight: 'bold',  // Negrito
    },
});