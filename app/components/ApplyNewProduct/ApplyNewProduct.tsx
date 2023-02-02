import React, { FC } from "react";
import { Alert } from "react-native";
import { useTailwind } from "tailwind-rn";
import Button from "../ui/Button";
import Padding from "../ui/Padding";
import { asyncAlert } from '../../utils/asyncAlert';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../modules/hooks/useAuth';
import { getRandomCardNumber } from "../../utils/getRandomCardNumber";

const ApplyNewProduct: FC = () => {
    const tw = useTailwind();
    const { user } = useAuth();

    const handleRegister = async () => {
        try {
            const currency = await asyncAlert({
                title: 'Currensy',
                msg: 'Select account currensy:',
                buttons: {
                    text: 'RUB',
                    resolveValue: 'RUB',
                    textSecond: 'USD',
                    resolveValueSecond: 'USD',
                }
            });

            const cardType = await asyncAlert({
                title: 'Card type',
                msg: 'Select card type:',
                buttons: {
                    text: 'Black',
                    resolveValue: 'Tinkoff Black',
                    textSecond: 'All airlines',
                    resolveValueSecond: 'Tinkoff All Airlines',
                }
            });

            await addDoc(collection(db, 'accounts'), {
                timestamp: serverTimestamp(),
                userId: user?.uid,
                balance: 0,
                cardNumber: getRandomCardNumber(),
                currency,
                name: cardType
            })
        } catch (error: any) {
            Alert.alert('Error appty new product', error.message);
        }
    }

    return (
        <Padding style={tw('mt-6')}>
            <Button onPress={handleRegister} title={'Apply for a new product'} />
        </Padding>
    );
};

export default ApplyNewProduct;
