import React, { FC } from "react";
import { Text } from "react-native";
import { useTailwind } from 'tailwind-rn';
import Goback from "../Goback/Goback";
import Padding from "./Padding";

interface ISubHeading {
    text: string;
}

const SubHeading: FC<ISubHeading> = ({ text }) => {
    const tw = useTailwind();

    return (
        <Padding>
            <Text style={tw(`text-xl font-bold text-gray-800`)}>{text}</Text>
        </Padding>
    );
};

export default SubHeading;
