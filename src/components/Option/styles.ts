import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"; // Importa as cores definidas no arquivo colors.ts

export const styles = StyleSheet.create({
    // Estilo do container da opção
    container: {
        flexDirection: 'row',  // Direção dos itens em linha
        alignItems: 'center',  // Alinha os itens ao centro na vertical
        gap: 6,  // Espaçamento entre os itens
        backgroundColor: colors.green[900],  // Cor de fundo cinza claro
        borderRadius: 8,  // Bordas arredondadas
        paddingVertical: 10,  // Espaçamento interno
        width: '100%',  // Largura total
        justifyContent: 'center',  // Centraliza os itens horizontalmente
    },

    titulo: {
        color: colors.white,  // Cor do texto verde escuro
        fontSize: 16,  // Tamanho da fonte
        fontWeight: 'bold',  // Negrito
    },
});