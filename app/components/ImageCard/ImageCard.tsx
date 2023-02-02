import React, { FC } from "react";
import { ImageBackground, ImageSourcePropType, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { IAccount } from "../../modules/types/accounts";

interface IImageCard {
    account: IAccount;
}

const ImageCard: FC<IImageCard> = ({ account: { name, cardNumber } }) => {
    const tw = useTailwind();

    const imageBlack: ImageSourcePropType = require('../../../assets/cards/black.png');
    const imageAirlines: ImageSourcePropType = require('../../../assets/cards/airlines.png');

    return (
        <ImageBackground
            source={name === 'Tinkoff All Airlines' ? imageAirlines : imageBlack}
            resizeMode={'cover'}
            style={{
                ...tw('justify-end'),
                height: 50,
                width: 80,
                paddingBottom: 10,
                paddingLeft: 5
            }}
        >
            <Text style={{
                ...tw('text-white font-medium'),
                fontSize: 12
            }}>{cardNumber.slice(-4)}</Text>
        </ImageBackground>
    );
};

export default ImageCard;
