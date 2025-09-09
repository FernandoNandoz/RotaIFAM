import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { InputText } from "@/components/InputText";
import { Button } from "@/components/Button";


export default function CadUser() {
    const [name, setName] = useState('');
    const [matricula, setMatricula] = useState('');
    const [curso, setCurso] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCadastrar() {
        if (!name.trim()) {
            return Alert.alert('Nome', 'Informe o nome do usuário.');
        }
        if (!matricula.trim()) {
            return Alert.alert('Matrícula', 'Informe o número da matrícula.');
        }
        if (!curso.trim()) {
            return Alert.alert('Curso', 'Informe o curso do usuário.');
        }
        if (!email.trim()) {
            return Alert.alert('Email', 'Informe o email do usuário.');
        }
        if (!password.trim()) {
            return Alert.alert('Senha', 'Informe a senha do usuário.');
        }

        // Lógica para cadastro de usuário
        console.log('Usuário cadastrado:', { name, matricula, curso, email, password });
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou armazená-los localmente
        // Após o cadastro, você pode redirecionar o usuário ou limpar os campos do formulário
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { router.back() }}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[600]} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Cadastro de Usuário</Text>
            </View>

            <Text style={styles.label}>Preencha os campos abaixo:</Text>

            <View style={styles.form}>
                <InputText 
                    placeholder="Informe seu nome" 
                    onChangeText={setName} 
                    autoCorrect={false}
                />
                <InputText 
                    placeholder="Informe o Nº da sua Matricula" 
                    onChangeText={setMatricula} 
                    autoCorrect={false}
                />
                <InputText 
                    placeholder="Informe o seu Curso" 
                    onChangeText={setCurso}
                    autoCorrect={false}
                />
                <InputText 
                    placeholder="Informe o seu Email" 
                    keyboardType="email-address" 
                    onChangeText={setEmail}
                    autoCorrect={false}
                />
                <InputText 
                    placeholder="Informe uma Senha" 
                    secureTextEntry 
                    onChangeText={setPassword}
                    autoCorrect={false}
                />

                <Button title="Cadastrar" onPress={handleCadastrar} />
                <Button title="Voltar" isSecondary={true} onPress={() => { router.back() }} />
            </View>

        </View>
    );
}
