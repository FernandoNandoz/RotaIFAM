import { FlatList } from "react-native";

import { styles } from "./styles";  // Importa os Estilos 
import { categories } from "@/utils/categories";  // Importa os Dados Fake
import { Rota } from "@/components/Rota"; // Importa o Componente Rota

type Props = {
    // Propriedades do componente (se houver)
    selected: string;
    onChange: (rotas: string) => void;
}

// Componente funcional que representa a lista de rotas
export function ListaRotas({ selected, onChange }: Props) {
    return (
        <FlatList
            data={categories}  // Dados a serem exibidos na lista
            keyExtractor={(item) => item.id}  // Chave única para cada item da lista
            renderItem={({ item }) => (
                <Rota 
                    name={item.name}  // Nome da rota
                    icon={item.icon}  // Ícone da rota
                    isSelected={item.name === selected}  // Estado de seleção da rota
                    onPress={() => onChange(item.name)}  // Função chamada ao pressionar a rota
                />
            )} // Renderiza cada item da lista
            horizontal // Define a lista como horizontal
            style={styles.container}  // Estilo da lista
            contentContainerStyle={styles.content}  // Estilo do conteúdo da lista
        />
    )
}