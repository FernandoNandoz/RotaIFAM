import { StyleSheet } from "react-native";

// Exporta os estilos para o componete solicitante
export const styles = StyleSheet.create({
    container: {
        height: 52,  // Altura da lista
        maxHeight: 52,  // Altura máxima da lista
        marginTop: 16,  // Margem superior da lista
    },

    content: {
        gap: 16,  // Espaçamento entre os itens da lista
        paddingHorizontal: 24  // Preenchimento horizontal do conteúdo da lista
    }
})