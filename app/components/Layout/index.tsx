import React, { FC, ReactNode } from "react";
import { View, ScrollView } from "react-native";
import { useTailwind } from 'tailwind-rn';

interface ILayout {
    children?: ReactNode;
    isScrollView?: boolean;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
    const tw = useTailwind();

    return (
        <View style={tw('h-full w-full bg-white pt-16')}>
            {isScrollView
                ? <ScrollView>{children}</ScrollView>
                : children
            }
        </View>
    );
};

export default Layout;
