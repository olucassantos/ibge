import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet 
} from 'react-native'

import React, { useState } from 'react'

const CampoFormulario = ({ titulo, valor, placeholder, quandoMudaTexto }) => {
    return (
        <View>
            <Text>{titulo}</Text>

            <TextInput 
                value={valor}
                placeholder={placeholder}
                onChangeText={quandoMudaTexto}
            />
        </View>
    )
}

export default CampoFormulario