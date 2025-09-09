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

    /* Estilos para o componente Text */
    titulo: {
        fontSize: 36, /* tamanho da fonte */
        fontWeight: 'bold', /* negrito */
        color: colors.green[900], /* cor do texto preta */
        marginBottom: 20, /* margem inferior */
    },

    /* Estilos para a lista de paradas */
    paradasList: {
        borderTopColor: colors.gray[200], // Cor da borda superior cinza
        borderTopWidth: 1, // Largura da borda superior
    },
    
    paradasListContent: {
        gap: 20, // Espaçamento entre os itens
        padding: 24, // Espaçamento interno
        paddingBottom: 100, // Espaçamento interno inferior
    },

    /* Estilos para o Modal do Menu */
    modalMenuContainer: {
        flex: 1, // Ocupa toda a tela
        justifyContent: 'flex-start', // Espaço uniforme entre os itens
    },

    modalMenuContent: {
        flex: 1, // Ocupa toda a tela
        gap: 16, // Espaçamento entre os itens
        backgroundColor: colors.white, // Cor de fundo branca
        marginLeft: 180, // Margem esquerda

        borderTopLeftRadius: 20, // Borda superior esquerda arredondada
        borderBottomLeftRadius: 20, // Borda inferior esquerda arredondada
        borderLeftWidth: 1, // Largura da borda esquerda

        borderLeftColor: colors.gray[200], // Cor da borda esquerda cinza
    },

    modalMenuHeader: {
        width: '100%', // Largura total
        flexDirection: 'row', // Direção dos itens em linha
        alignItems: 'center', // Alinha ao centro na vertical

        borderBottomColor: colors.gray[200], // Cor da borda inferior cinza
        borderBottomWidth: 1, // Largura da borda inferior

        padding: 18, // Espaçamento interno
        paddingBottom: 6, // Espaçamento interno inferior
    },

    modalMenuTitle: {
        flex: 1, // Ocupa todo o espaço disponível
        fontSize: 20, // Tamanho da fonte
        fontWeight: 'bold', // Negrito
        color: colors.green[800], // Cor do texto preta
    },

    ModalItens: {
        paddingLeft: 16, // Espaçamento interno horizontal
        gap: 12, // Espaçamento entre os itens
    },

    /* Estilos para o Modal */
    modalContainer: {
        flex: 1, // Ocupa toda a tela
        justifyContent: 'flex-end', // Alinha o conteúdo ao final da tela
    },

    modalContent: {
        backgroundColor: colors.gray[100], // Cor de fundo branca
        borderTopWidth: 1, // Largura da borda superior
        borderTopColor: colors.gray[300], // Cor da borda superior cinza
        paddingBottom: 42, // Espaçamento interno inferior
        padding: 24, // Espaçamento interno
    },

    modalHeader: {
        width: '100%', // Largura total
        flexDirection: 'row', // Direção dos itens em linha
        alignItems: 'center', // Alinha ao centro na vertical
        marginBottom: 16, // Margem inferior
    },

    modalTitle: {
        flex: 1, // Ocupa todo o espaço disponível
        fontSize: 20, // Tamanho da fonte
        fontWeight: 'bold', // Negrito
        color: colors.green[800], // Cor do texto preta
    },

    modalText: {
        fontSize: 18, // Tamanho da fonte
        fontWeight: '400', // Peso da fonte
        color: colors.gray[600], // Cor do texto preta
        marginBottom: 3, // Margem inferior
    },

    modalActions: {
        marginTop: 20, // Margem superior
        flexDirection: 'row', // Direção dos itens em linha
        justifyContent: 'space-around', // Espaço ao redor dos itens
    }
});