import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { IContact } from "../../modules/types/contacts";
import { handleTransfer } from "../../utils/payments/handleTransfer";
import Avatar from "../ui/Avatar";
import { useAccounts } from '../../modules/hooks/useAccounts';

interface IContactItem {
    contact: IContact;
}

const ContactItem: FC<IContactItem> = ({ contact }) => {
    const { accounts } = useAccounts();
    const tw = useTailwind();

    return (
        <Pressable onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)} style={tw('ml-4 mr-1 items-center')}>
            <Avatar size='large' name={contact.displayName} />
            <Text style={tw('mt-1 text-xs')}>
                {contact.displayName}
            </Text>
        </Pressable>
    );
};

export default ContactItem;
