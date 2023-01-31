import { ActivityIndicator } from "react-native";
import { COLORS } from "../../styles";

const Loader = () => {
    return <ActivityIndicator size='large' color={COLORS.primary}/>
}

export default Loader;
