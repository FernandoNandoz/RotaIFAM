import { StyleSheet } from "react-native" // Importa os componentes Text, View e StyleSheet do React Native

import { colors } from "@/styles/colors" // Importa as cores definidas no arquivo colors.ts

// Exporta os estilos para o componete solicitante
export const styles = StyleSheet.create({

    /* Estilos para o componente View */
    container: { 
        flex: 1, /* ocupa toda a tela */
        paddingTop: 40, /* padding superior */
    },

    /* Estilos Imagem de fundo */
    imageBackground: {
        flex: 1,
    },

    /* Estilos para o Header */
    header: {
        width: '100%', /* largura total */
        paddingHorizontal: 10, /* padding horizontal */
        flexDirection: 'row', /* direção dos itens em linha */
        justifyContent: 'space-between', /* espaço entre os itens */
        alignItems: 'center', /* alinha ao centro na vertical */
        marginBottom: 20, /* margem inferior */
    },

    /* Estilos para o logo no Herader*/
    logoIfam: {
        width: 32, /* largura da imagem */
        height: 32, /* altura da imagem */
    },

    /* Estilos para o componente que recebe a imagem e o titulo */
    hero: {
        alignItems: 'center', /* alinha ao centro na horizontal */
        justifyContent: 'center', /* alinha ao centro na vertical */
    },

    /* Estilos logo do onibus */
    logoBus : {
        width: 250, /* largura da imagem */
        height: 200, /* altura da imagem */
    },

    /* Estilos para o componente Text */
    titulo: {
        fontSize: 36, /* tamanho da fonte */
        fontWeight: 'bold', /* negrito */
        color: colors.green[900], /* cor do texto preta */
        marginBottom: 40, /* margem inferior */
    },
    /* Estilos para o componente View que recebe os inputs */
    form: {
        width: '100%', /* largura total */
        paddingHorizontal: 30, /* padding horizontal */
        gap: 14, /* espaço entre os itens */
    },

    /* Estilos para o componente View que recebe os botões */
    buttonsContainer: {
        marginTop: 25,  /* margem superior */
        paddingHorizontal: 45,  /* padding horizontal */
        gap: 12  /* espaço entre os itens */
    }
});