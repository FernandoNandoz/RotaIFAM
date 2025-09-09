import { useState } from "react" // Importa o hook useState do React
import { View, Text, Image, TouchableOpacity, FlatList, Modal, Linking, Alert } from "react-native" // Importa os componentes Text, View e StyleSheet do React Native
import { router } from "expo-router" // Importa o roteador do Expo
import { MaterialIcons } from "@expo/vector-icons" // Importa os ícones do MaterialIcons

import { colors } from "@/styles/colors" // Importa as cores definidas no arquivo colors.ts
import { styles } from "./styles" // Importa os estilos definidos no arquivo styles.ts
import { categories } from "@/utils/categories" // Importa as categorias definidas no arquivo categories.ts

import { ListaRotas } from "@/components/ListaRotas" // Importa o componente ListaRotas
import { Parada } from "@/components/Parada" // Importa o componente Parada
import { Item } from "@/components/Item" // Importa o componente Item
import { Option } from "@/components/Option" // Importa o componente Option
import { rotasParada } from "@/utils/rotasParada" // Importa as rotas e paradas definidas no arquivo rotasParada.ts


// Componente funcional padrão do React Native
export default function Index() {
    const [selectedRota, setSelectedRota] = useState(categories[0].name) // Estado para a rota selecionada
    const [isMenuVisible, setIsMenuVisible] = useState(false) // Estado para controlar a visibilidade do menu
    const [isModalVisible, setIsModalVisible] = useState(false) // Estado para controlar a visibilidade do modal

    const [nameParada, setNameParada] = useState('') // Estado para o nome da parada
    const [descriptionParada, setDescriptionParada] = useState('') // Estado para a descrição da parada
    const [timeParada, setTimeParada] = useState('') // Estado para o horário da parada
    const [addressParada, setAddressParada] = useState('') // Estado para o endereço da parada

    // Função para lidar com a seleção de uma parada
    function handleSelectParada(selected: string) {
        const parada = rotasParada.find((item) => item.id === selected) // Encontra a parada selecionada pelo ID
        
        // Se a parada for encontrada, atualiza os estados correspondentes
        if (parada) {
            setNameParada(parada.nameParada) // Atualiza o estado com o nome da parada
            setDescriptionParada(parada.descriptionParada) // Atualiza o estado com a descrição da parada
            setTimeParada(parada.hourParada) // Atualiza o estado com o horário da parada
            setAddressParada(parada.addressParada) // Atualiza o estado com o endereço da parada
        }

        setIsModalVisible(true)  // Abre o modal
    }

    function handleFilterParadas() {
        // Filtra as paradas com base na rota selecionada
        return rotasParada.filter((item) => item.rota === selectedRota)
    }

    function handleOpenMaps(address: string) {
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` // Cria a URL do Google Maps com o endereço fornecido  
        
        // Tenta abrir a URL do Google Maps
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(url) // Abre a URL no aplicativo padrão
                } else {
                    Alert.alert('Erro', 'Não foi possível abrir o Google Maps.') // Exibe um alerta se não for possível abrir a URL
                }
            })
            .catch((err) => console.error('Erro ao abrir o Google Maps:', err)) // Loga qualquer erro que ocorra ao tentar abrir a URL
    }

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

                <TouchableOpacity
                    onPress={() => { setIsMenuVisible(true) }} // Navega para a tela de cadastro de usuário ao pressionar o botão 
                >
                    <MaterialIcons name="menu" size={32} color={colors.green[900]} />
                </TouchableOpacity>
            </View>

            <View style={styles.hero}>
                <Text style={styles.titulo}>
                    RotaIFAM
                </Text>
            </View>
            
            <ListaRotas 
                onChange={setSelectedRota}  // Função para atualizar a rota selecionada
                selected={selectedRota}  // Rota atualmente selecionada
            />

            <FlatList
                data={handleFilterParadas()} // Dados fictícios
                keyExtractor={(item) => item.id} // Extrai a chave única para cada item
                renderItem={({ item }) => (
                    <Parada 
                        name={item.nameParada}  // Nome da parada
                        description={item.descriptionParada}  // Descrição da parada
                        onDetails={() => { 
                            handleSelectParada(item.id)  // Abre o modal com os detalhes da parada
                        }} // Função chamada ao pressionar o botão de detalhes
                    />
                )}  // Renderiza cada item da lista  
                style={styles.paradasList} // Aplica o estilo paradasList
                contentContainerStyle={styles.paradasListContent} // Aplica o estilo paradasListContent ao conteúdo da lista
                showsVerticalScrollIndicator={false} // Oculta o indicador de rolagem vertical
            />

            
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