import React, { FC } from "react";
import { ScrollView } from "react-native";
import Layout from '../../components/Layout/index';
import Message from "../../components/Message/Message";
import SupportField from "../../components/SupportField/SupportField";
import SupportHeader from "../../components/SupportHeader";
import Padding from "../../components/ui/Padding";
import { useMessages } from "../../modules/hooks/useMessages";

const Support: FC = () => {
  const { messages } = useMessages();

  return (
    <Layout isScrollView={false}>
      <Padding>
        <SupportHeader />
        <ScrollView style={{ height: '83%' }}>
          {
            messages.map(message => <Message key={message._id} {...{ message }} />)
          }
        </ScrollView>
        <SupportField />
      </Padding>
    </Layout>
  );
};

export default Support;
