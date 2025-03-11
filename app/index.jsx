import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BotaoPersonalizado from '../components/BotaoPersonalizado'
import { router } from 'expo-router'

const Index = () => {
    return (
        <View>
            <Text style={estilos.logotipo}>IBGE</Text>

            <Text style={estilos.subtitulo}>
                SPERS - Sexualidades, Profissões, Etnias, Religiões e Salários
            </Text>

            <Text style={estilos.descricao}>
                A pesquisa SPERS tem como objetivo coletar dados abrangentes sobre as diversas dimensões da sociedade brasileira, focando nas relações entre sexualidades, profissões, etnias, religiões e salários. Este estudo fictício foi idealizado para promover uma compreensão mais profunda das dinâmicas sociais e econômicas do Brasil, proporcionando informações valiosas para a criação de políticas públicas inclusivas e estratégias de desenvolvimento que respeitem a diversidade cultural e social do país.
            </Text>

            <View>
                <BotaoPersonalizado 
                    titulo="Iniciar Pesquisa"
                    acaoClique={() => router.navigate('/cadastro')}
                />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    logotipo: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontStyle: 'italic',
        backgroundColor: '#024280',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 20,
        textAlign: 'center',
        color: '#024280',
        marginBottom: 20,
    },
    descricao: {
        fontSize: 15,
        color: '#000',
        marginHorizontal: 20,
        marginBottom: 20,
    }
});

export default Index