import { Text, Pressable, PressableProps } from "react-native"
import { MaterialIcons } from "@expo/vector-icons" // Importa os ícones do MaterialIcons

import { styles } from "./styles"  // Importa os estilos definidos no arquivo styles.ts
import { colors } from "@/styles/colors" // Importa as cores definidas no arquivo colors.ts

// Define os tipos das propriedades esperadas pelo componente
type Props = PressableProps & { // Extende as propriedades do Pressable

    name: string;  // Define o tipo do nome como string
    isSelected: boolean;  // Define o tipo isSelected como boolean
    icon: keyof typeof MaterialIcons.glyphMap;  // Define o tipo do ícone como uma chave do glyphMap do MaterialIcons
}

// Componente funcional padrão do React Native
export function Rota({name, icon, isSelected, ...rest}: Props) {
    const backgroundColor = isSelected ? colors.green[900] : colors.gray[100];
    const color = isSelected ? colors.white : colors.gray[600];

    return (
        <Pressable style={[styles.container, {backgroundColor}]} onPress={() => alert('Você precionou o botão.')} {...rest} >
            <MaterialIcons name={icon} size={16} color={color} /> 
            <Text style={[styles.name, {color}]}>{name}</Text>
        </Pressable>
    )
}

