import React, { FC, ReactNode } from "react";
import { View, ScrollView } from "react-native";
import { useTailwind } from 'tailwind-rn';
import { styleCenter } from "./styles";

interface ILayout {
    children?: ReactNode;
    isScrollView?: boolean;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
    const tw = useTailwind();

    return (
        <View style={tw(styleCenter)}>
            {isScrollView
                ? <ScrollView>{children}</ScrollView>
                : children
            }
        </View>
    );
};

export default Layout;
