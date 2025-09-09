import { StyleSheet } from 'react-native';

import { colors } from '@/styles/colors' // Importa as cores definidas no arquivo colors.ts

// Exporta os estilos para o componete solicitante
export const styles = StyleSheet.create({
    // Estilo do container da rota
    container: {
        flex: 1,
        paddingTop: 62
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginBottom: 24
    },

    titulo: {
        color: colors.gray[600],
        fontSize: 24,
        fontWeight: 'bold'
    },

    label: {
        color: colors.gray[600],
        fontSize: 16,
        paddingHorizontal: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    form: {
        paddingHorizontal: 24,
        gap: 12,
    },

});