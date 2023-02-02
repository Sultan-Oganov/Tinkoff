import React, { FC } from "react";
import { Text, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { AntDesign } from '@expo/vector-icons';
import { IFooterItem } from "../../modules/types/footer";
import { TypeRootStackParamList } from "../../modules/navigation/types";

interface INavItem {
    item: IFooterItem;
    navigate: (screenName: keyof TypeRootStackParamList) => void;
    currentRoute: string;
}

const NavItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
    const tw = useTailwind();
    const isActive = currentRoute === item.title;

    const handleNavigate = () => {
        navigate(item.title);
    }

    return (
        <Pressable style={{
            ...tw('items-center'),
            width: '20%'
        }} onPress={handleNavigate}>
            <AntDesign
                name={item.iconName}
                style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`)}
            />
            <Text
                style={{
                    ...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`),
                    marginTop: 1
                }}
            >
                {item.title}
            </Text>
        </Pressable>
    );
};

export default NavItem;
