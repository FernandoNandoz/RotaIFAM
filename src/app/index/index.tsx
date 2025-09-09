import { View, Text, Image, TouchableOpacity } from "react-native" // Importa os componentes Text, View e StyleSheet do React Native
import { MaterialIcons } from "@expo/vector-icons" // Importa os ícones do MaterialIcons

import { colors } from "@/styles/colors" // Importa as cores definidas no arquivo colors.ts
import { styles } from "./styles" // Importa os estilos definidos no arquivo styles.ts

import { Button } from "@/components/Button" // Importa o componente Button
import { InputText } from "@/components/InputText"
import { router } from "expo-router"


// Componente funcional padrão do React Native
export default function Index() {

    // Retorna a estrutura do componente
    return (
        /* Componente View com estilo container */
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image 
                    source={require("@/assets/logo-ifam.png")} // Imagem do logo
                    style={styles.logoIfam} // Aplica o estilo logoIfam
                    resizeMode="contain" // Define o modo de redimensionamento da imagem
                />

                <TouchableOpacity activeOpacity={0.7}> 
                    <MaterialIcons name="help" size={32} color={colors.green[900]} />
                </TouchableOpacity>
                
            </View>

            <View style={styles.hero}>
                <Image 
                    source={require("@/assets/logo-bus.png")} // Imagem do logo
                    style={styles.logoBus} // Aplica o estilo logo
                    resizeMode="contain" // Define o modo de redimensionamento da imagem
                />

                <Text style={styles.titulo}>
                    RotaIFAM
                </Text>
            </View>

            <View style={styles.form}>
                <InputText placeholder="E-mail" keyboardType="email-address" />
                <InputText placeholder="Senha" secureTextEntry={true} />
            </View>

            <View style={styles.buttonsContainer}>
                <Button title="Entrar" onPress={() => { router.navigate('./home') }} />
                <Button title="Cadastrar" isSecondary onPress={() => { router.navigate('./cadUser') }}/>
            </View>

        </View>
    )
}