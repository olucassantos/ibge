import { View, Text } from 'react-native'
import React from 'react'
import BotaoPersonalizado from '../components/BotaoPersonalizado'
import { router } from 'expo-router'

const Index = () => {
    return (
        <View>
            <Text>Bem vindo ao meu APP</Text>

            <BotaoPersonalizado 
                titulo="Fazer Cadastro"
                acaoClique={() => router.push('/cadastro')}
            />
        </View>
    )
}

export default Index