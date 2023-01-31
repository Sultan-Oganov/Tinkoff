import React, { FC, ReactNode } from "react";
import { View } from "react-native";
import { useTailwind } from 'tailwind-rn';

interface IPadding {
    children: ReactNode
    style?: any;
}

const Padding: FC<IPadding> = ({ children, style = {} }) => {
    const tw = useTailwind();

    return (
        <View style={{ ...tw('px-4'), ...style }}>
            {children}
        </View>
    );
};

export default Padding;
