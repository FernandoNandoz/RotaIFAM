import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"; // Importa as cores definidas no arquivo colors.ts

// Define os estilos para o componente InputText
export const styles = StyleSheet.create({

    // Estilo do contêiner do campo de entrada de texto
    container: {
        fontSize: 16,  // Tamanho da fonte do texto
        color: colors.gray[900],  // Cor do texto
        backgroundColor: colors.gray[100],
        
        paddingVertical: 14,  // Espaçamento interno vertical
        paddingHorizontal: 16,  // Espaçamento interno horizontal
        
        borderWidth: 1,  // Largura da borda
        borderRadius: 8,  // Raio da borda
        borderColor: colors.gray[600],  // Cor da borda
    },

})