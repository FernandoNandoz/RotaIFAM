import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"  // Importa os estilos definidos no arquivo styles.ts
import { colors } from "@/styles/colors" // Importa as cores definidas no arquivo colors.ts

// Define os tipos das propriedades esperadas pelo componente
type Props = TouchableOpacityProps & { // Extende as propriedades do Pressable
    title: string; // Define o tipo do nome como string
    isSecondary?: boolean; // Define o tipo do isSecondary como boolean (opcional)
}

// Componente funcional padrão do React Native
export function Button({title, isSecondary, ...rest}: Props) {
    const backgroundColor = isSecondary ? colors.gray[500] : colors.green[700]; // Define a cor de fundo com base na propriedade isSecondary

    return (
        <TouchableOpacity 
            style={[styles.container, {backgroundColor}]} 
            activeOpacity={0.7} 
            onPress={() => alert('Você precionou o botão.')} 
            {...rest} 
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

