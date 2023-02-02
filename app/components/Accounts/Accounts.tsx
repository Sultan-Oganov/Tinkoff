import React, { Fragment } from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useAccounts } from "../../modules/hooks/useAccounts";
import Loader from "../ui/Loader";
import Padding from "../ui/Padding";
import { COLORS } from '../../styles';
import AccountItem from "../AccountItem/AccountItem";

const Accounts = () => {
    const { accounts, isLoading } = useAccounts();
    const tw = useTailwind();

    return (
        <Padding>
            {
                isLoading ? (
                    <Loader />
                ) : accounts.length ? (
                    accounts.map((account, idx) => (
                        <Fragment key={account._id}>
                            <AccountItem {...{ account }}></AccountItem>
                            {idx + 1 !== accounts.length &&
                                <View style={{
                                    borderBottomColor: COLORS.grayLight,
                                    borderBottomWidth: 1,
                                    marginBottom: 24,
                                }}></View>}
                        </Fragment>
                    ))) : <Text>You don't have cards</Text>
            }
        </Padding >
    );
};

export default Accounts;
