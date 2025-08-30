import { useState } from "react" // Importa o hook useState do React
import { View, Text, TouchableOpacity, Modal } from "react-native" // Importa os componentes Text, View e StyleSheet do React Native
import { router } from "expo-router" // Importa o roteador do Expo
import { MaterialIcons } from "@expo/vector-icons" // Importa os ícones do MaterialIcons

import { colors } from "@/styles/colors" // Importa as cores definidas no arquivo colors.ts
import { styles } from "./styles" // Importa os estilos definidos no arquivo styles.ts
import { categories } from "@/utils/categories" // Importa as categorias definidas no arquivo categories.ts

import { Item } from "@/components/Item" // Importa o componente Item
import { Option } from "@/components/Option" // Importa o componente Option


// Componente funcional padrão do React Native
export default function Index() {
    const [selectedRota, setSelectedRota] = useState(categories[0].name) // Estado para a rota selecionada
    const [isMenuVisible, setIsMenuVisible] = useState(false) // Estado para controlar a visibilidade do menu
    const [isModalVisible, setIsModalVisible] = useState(false) // Estado para controlar a visibilidade do modal

    const [nameParada, setNameParada] = useState('') // Estado para o nome da parada
    const [descriptionParada, setDescriptionParada] = useState('') // Estado para a descrição da parada
    const [timeParada, setTimeParada] = useState('') // Estado para o horário da parada
    const [addressParada, setAddressParada] = useState('') // Estado para o endereço da parada




    // Retorna a estrutura do componente
    return (
        /* Componente View com estilo container */
        <View style={styles.container}> 

            
            
            <Modal transparent visible={isMenuVisible} >
                <View style={styles.modalMenuContainer}>
                    <View style={styles.modalMenuContent}>
                        <View style={styles.modalMenuHeader}>
                            <Text style={styles.modalMenuTitle}>Menu</Text>
                            <TouchableOpacity onPress={() => { setIsMenuVisible(false) }}>
                                <MaterialIcons name="close" size={24} color={colors.green[900]} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ModalItens}>
                            <Item 
                                titulo="Perfil" 
                                iconName="person"
                                onPress={() => { console.log("Navegar para o perfil...") }}
                            />
                            <Item 
                                titulo="Configurações" 
                                iconName="settings" 
                                onPress={() => { console.log("Navegar para as configurações...") }}
                            />
                            <Item 
                                titulo="Sobre"
                                iconName="info"
                                onPress={() => { console.log("Navegar para a tela Sobre...") }}
                            />

                            <Item 
                                titulo="Sair"
                                iconName="logout"
                                onPress={() => { router.back() }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent visible={isModalVisible} >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Detalhes da Parada</Text>
                            <TouchableOpacity onPress={() => { setIsModalVisible(false) }}>
                                <MaterialIcons name="close" size={20} color={colors.gray[600]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalText}>
                            <Text style={{ fontWeight: 900 }}>
                                Nome da Parada: 
                            </Text>
                            {' '}
                            {nameParada}
                        </Text>
                        <Text style={styles.modalText}>
                            <Text style={{ fontWeight: 900 }}>
                                Descrição: 
                            </Text>
                            {' '}
                            {descriptionParada}
                        </Text>
                        <Text style={styles.modalText}>
                            <Text style={{ fontWeight: 900 }}>
                                Horário de parada: 
                            </Text>
                            {' '}
                            {timeParada}
                        </Text>
                        <Text style={styles.modalText}>
                            <Text style={{ fontWeight: 900 }}>
                                Endereço:  
                            </Text>
                            {' '}
                            {addressParada}
                        </Text>   

                        <View style={styles.modalActions}>
                            <Option 
                                titulo="Ver no Mapa" 
                                iconName="map" 
                                onPress={() => { handleOpenMaps(addressParada) }} 
                            />
                        </View>
                        
                    </View>
                </View>
            </Modal>

        </View>
    )
}