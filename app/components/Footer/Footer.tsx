import React, { FC } from "react";
import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import Padding from "../ui/Padding";
import { COLORS } from '../../styles';
import { menu } from './menu';
import NavItem from "../NavItem/NavItem";
import { TypeRootStackParamList } from "../../modules/navigation/types";

interface IFooter {
    navigate: (screenName: keyof TypeRootStackParamList) => void;
    currentRoute: string;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
    const tw = useTailwind();

    return (
        <Padding style={{
            ...tw('flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2'),
            borderTopColor: COLORS.grayDark,
            borderTopWidth: 1
        }}>
            {
                menu.map(item => (
                    <NavItem key={item.title} {...{ item, navigate, currentRoute }} />
                ))
            }

        </Padding>
    );
};

export default Footer;
