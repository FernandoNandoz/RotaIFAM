import { MaterialIcons } from "@expo/vector-icons" // Importa os icones

// Define os tipos das categorias
type Category = {
    id: string;  // Identificador único da categoria
    name: string; // Nome da categoria
    icon: keyof typeof MaterialIcons.glyphMap; // Ícone da categoria
}

// Exporta as categorias
export const categories: Category[] = [
    { id: "1", name: "Rota A", icon: "bus-alert" }, // Dados da Rota A
    { id: "2", name: "Rota B", icon: "bus-alert" }  // Dados da Rota B
]