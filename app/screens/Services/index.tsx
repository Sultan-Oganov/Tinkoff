import React, { FC } from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import Layout from '../../components/Layout/index';
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import { services } from '../../modules/mocks/servicesMock';

const Services: FC = () => {
  const tw = useTailwind();

  return (
    <Layout>
      <Text style={tw('text-center text-lg mb-6')}>Moscow</Text>
      <View style={tw('flex-row flex-wrap justify-center')}>
        {
          services.map(service => <ServiceItem key={service.title} {...{ service }} />)
        }
      </View>
    </Layout>
  );
};

export default Services;
