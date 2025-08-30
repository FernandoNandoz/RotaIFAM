import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Importa os ícones do Material Icons

import { styles } from "./styles";  // Importa os estilos do componente
import { colors } from "@/styles/colors";  // Importa as cores definidas no arquivo colors.ts

// Define os tipos das propriedades esperadas pelo componente
type Props = {
    name: string;  // Nome da parada
    description: string;  // Detalhes da parada
    onDetails: () => void;  // Função a ser chamada ao clicar no botão de detalhes
}

// Componente funcional que representa uma parada
export function Parada({ name, description, onDetails }: Props) {
    return (
        <View style={styles.container}>
            <MaterialIcons name="location-on" style={styles.iconDetails} />
            <View style={styles.datails}>
                <Text style={styles.name} numberOfLines={1}>
                    {name}
                </Text>
                
                <Text style={{ color: colors.gray[600], fontSize: 14 }} numberOfLines={1}>
                    {description}
                </Text>
            </View>

            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[900]} />
            </TouchableOpacity>
        </View>
    );
}