import React, { FC } from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import Currencies from "../../components/Currencies/Currencies";
import Layout from '../../components/Layout/index';
import Menu from "../../components/Menu/Menu";
import Heading from "../../components/ui/Heading";
import Padding from "../../components/ui/Padding";

const More: FC = () => {
  const tw = useTailwind();

  return (
    <Layout>
      <Heading text={'More'} />
      <Padding>
        <Currencies />
        <Menu />
        <Text style={tw('text-center text-gray-500 opacity-50 my-4')}>
          Version 5.20.6
        </Text>
      </Padding>
    </Layout>
  );
};

export default More;
