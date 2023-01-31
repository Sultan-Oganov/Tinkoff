import { TypeRootStackParamList } from "./app/modules/navigation/types";


declare global {
    namespace ReactNavigation {
        interface RootParamList extends TypeRootStackParamList{};
    }
}