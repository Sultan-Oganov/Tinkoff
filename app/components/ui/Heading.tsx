import React, { FC } from "react";
import { Text } from "react-native";
import { useTailwind } from 'tailwind-rn';
import Goback from "../Goback/Goback";
import Padding from "./Padding";

interface IHeading {
    text: string;
    isCenter?: boolean;
    backBtn?: boolean;
}

const Heading: FC<IHeading> = ({ text, isCenter = false, backBtn = false }) => {
    const tw = useTailwind();

    return (
        <Padding style={backBtn && tw('flex-row items-center relative')}>
            {backBtn && <Goback style={'absolute left-2 z-10'} />}
            <Text style={tw(`text-2xl font-bold text-gray-800 justify-center w-full ${isCenter && 'text-center '} ${backBtn && 'ml-5'}`)}>{text}</Text>
        </Padding>
    );
};

export default Heading;
