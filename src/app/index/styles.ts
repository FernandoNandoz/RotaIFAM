import { StyleSheet } from "react-native" // Importa os componentes Text, View e StyleSheet do React Native

import { colors } from "@/styles/colors" // Importa as cores definidas no arquivo colors.ts

// Exporta os estilos para o componete solicitante
export const styles = StyleSheet.create({

    /* Estilos para o componente View */
    container: { 
        flex: 1, /* ocupa toda a tela */
        backgroundColor: colors.white, /* cor de fundo branca */
        alignItems: 'center', /* alinha ao centro na horizontal */
        justifyContent: 'center', /* alinha ao centro na vertical */
    },

    /* Estilos para o componente Text */
    titulo: {
        fontSize: 20, /* tamanho da fonte */
        fontWeight: 'bold', /* negrito */
        color: colors.green[900], /* cor do texto preta */
    },
});