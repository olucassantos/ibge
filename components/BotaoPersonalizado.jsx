import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BotaoPersonalizado = ({ titulo, acaoClique }) => {
    return (
        <TouchableOpacity
            onPress={acaoClique}
            style={estilos.botao}
        >
            <Text style={estilos.textoBotao}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao: {
        padding: 10,
        backgroundColor: '#024280',
        borderRadius: 3,
    },
    textoBotao: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default BotaoPersonalizado;