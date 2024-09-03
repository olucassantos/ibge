import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const LayoutRaiz = () => {
    return (
        <Stack>
            <Stack.Screen name="index" 
                options={{ 
                    headerShown: true, // Mostra o cabeçalho
                    title: "Página Inicial", // Título do cabeçalho
                    headerStyle: {
                        backgroundColor: "#f4511e", // Cor de fundo
                    }
                }} 
            />

            <Stack.Screen name="cadastro" 
                options={{
                    headerShown: true, // Mostra o cabeçalho
                    title: "Cadastro", // Título do cabeçalho
                    headerStyle: {
                        backgroundColor: "#f1f1f1", // Cor de fundo
                    }
                }} 
            />
        </Stack>
    )
}

export default LayoutRaiz