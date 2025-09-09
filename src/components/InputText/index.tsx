import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles"; // Importa os estilos definidos no arquivo styles.ts


// Componente funcional que representa um campo de entrada de texto
export function InputText({ ...rest }: TextInputProps) {
    return (
        <TextInput 
            style={styles.container}  // Aplicando estilo ao TextInput
            {...rest}  // Passa todas as propriedades recebidas para o TextInput
        />
    )
}