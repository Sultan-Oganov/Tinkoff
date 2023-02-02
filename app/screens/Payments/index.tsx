import React, { FC } from "react";
import { View, Text } from "react-native";
import Contacts from "../../components/Contacts/Contacts";
import Layout from '../../components/Layout/index';
import OtherPayments from "../../components/OtherPayments/OtherPayments";
import Heading from "../../components/ui/Heading";

const Payments: FC = () => {
  return (
    <Layout>
      <Heading text={'Payments'} />
      <Contacts />
      <OtherPayments />
    </Layout>
  );
};

export default Payments;
