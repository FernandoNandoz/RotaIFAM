import { Text, View } from "react-native" // Importa os componentes Text, View e StyleSheet do React Native

import { styles } from "./styles" // Importa os estilos definidos no arquivo styles.ts

// Componente funcional padrão do React Native
export default function Index() {

    // Retorna a estrutura do componente
    return (
        <View style={styles.container}> /* Componente View com estilo container */
            <Text style={styles.titulo} >Hello RotaIFAM</Text>
        </View>
    )
}