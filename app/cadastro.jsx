import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

import CampoFormulario from '../components/CampoFormulario'

const Cadastro = () => {
    return (
        <View>
            <Text style={estilos.logotipo}>IBGE</Text>

            <Text style={estilos.subtitulo}>
                Faça seu cadastro e responda!
            </Text>

            <View>
                <CampoFormulario 
                    titulo="Nome"
                    valor=""
                    placeholder="Digite seu nome"
                    quandoMudaTexto={() => {}}
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
    }
});

export default Cadastro