import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import SubHeading from "../ui/SubHeading";
import OtherPaymentsItem from '../OtherPaymentsItem/OtherPaymentsItem';
import { otherPaymentsItems } from "../../modules/mocks/otherPaymentsMock";

const OtherPayments: FC = () => {
    const tw = useTailwind();

    return (
        <View>
            <SubHeading text={'Important transfers'} />
            <ScrollView
                style={tw('py-5')}
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                {
                    otherPaymentsItems.map((item) => (
                        <OtherPaymentsItem key={item.title} {...{ item }} />
                    ))
                }
            </ScrollView>
        </View>
    );
};

export default OtherPayments;
