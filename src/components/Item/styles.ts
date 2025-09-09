import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"; // Importa as cores definidas no arquivo colors.ts

export const styles = StyleSheet.create({
    // Estilo do container da opção
    container: {
        flexDirection: 'row',  // Direção dos itens em linha
        width: '100%',  // Largura total
        gap: 12,  // Espaçamento entre os itens

        alignItems: 'center',  // Alinha os itens ao centro na vertical
        
        paddingVertical: 15,  // Espaçamento interno
        paddingLeft: 16,  // Espaçamento interno à esquerda
        
        borderColor: colors.gray[200],  // Cor da borda superior cinza
        borderWidth: 1,  // Largura da borda superior
        
        borderBottomLeftRadius: 8,  // Borda inferior esquerda arredondada
        borderTopLeftRadius: 8,  // Borda superior esquerda arredondada
    },

    titulo: {
        color: colors.green[900],  // Cor do texto verde escuro
        fontSize: 16,  // Tamanho da fonte
        fontWeight: 'bold',  // Negrito
    },
});