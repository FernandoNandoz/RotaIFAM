import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"; // Importa as cores definidas no arquivo colors.ts

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  // Direção dos itens em linha
        width: '100%',  // Largura total do container
        alignItems: 'center',  // Alinha os itens ao centro na vertical
        gap: 10,  // Espaçamento entre os itens
    },
    datails: {
        flex: 1,  // Ocupar o espaço disponível
    },
    name: {
        color: colors.gray[900],  // Cor do texto cinza escuro
        fontSize: 16,  // Tamanho da fonte
        fontWeight: 'bold',  // Negrito
    },
    description: {
        color: colors.gray[600],  // Cor do texto cinza médio
        fontSize: 14,  // Tamanho da fonte
    },
    iconDetails: {
        fontSize: 30,  // Tamanho do ícone
        padding: 0,  // Espaçamento interno~
        margin: 0,  // Margem externa
        color: colors.green[900],  // Cor do ícone verde escuro
    },
});