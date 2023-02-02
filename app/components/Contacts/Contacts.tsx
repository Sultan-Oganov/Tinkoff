import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useContacts } from "../../modules/hooks/useContacts";
import ContactItem from "../ContactItem/ContactItem";
import Loader from "../ui/Loader";
import SubHeading from "../ui/SubHeading";

const Contacts: FC = () => {
    const { contacts, isLoading } = useContacts();
    const tw = useTailwind();

    return (
        <View style={tw('my-8')}>
            <SubHeading text={'Phone transfers'} />
            {
                isLoading ? <Loader /> : (
                    <ScrollView
                        style={tw('mt-5')}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    >
                        {
                            contacts.map((contact) => (
                                <ContactItem key={contact._id} {...{ contact }} />
                            ))
                        }
                    </ScrollView>
                )
            }

        </View>
    );
};

export default Contacts;
