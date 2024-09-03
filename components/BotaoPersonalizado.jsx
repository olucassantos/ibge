import { TouchableOpacity, Text } from "react-native";

const BotaoPersonalizado = ({ titulo, acaoClique }) => {
    return (
        <TouchableOpacity
            onPress={acaoClique}
        >
            <Text>{titulo}</Text>
        </TouchableOpacity>
    )
}

export default BotaoPersonalizado;