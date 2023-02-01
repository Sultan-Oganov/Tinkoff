import React, { FC } from "react";
import { Text, View } from "react-native";
import Layout from "../../components/Layout";
import Button from "../../components/ui/Button";
import Field from "../../components/ui/Field";
import Heading from "../../components/ui/Heading";
import Loader from "../../components/ui/Loader";
import Padding from "../../components/ui/Padding";
import { useAuth } from "../../modules/hooks/useAuth";
import { useProfile } from '../../modules/hooks/useProfile';
import { useUpdateProfile } from "../../modules/hooks/useUpdateProfile";
import { COLORS } from '../../styles';
import { useTailwind } from 'tailwind-rn';

const Profile: FC = () => {
  const { logout } = useAuth();
  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();
  const { isLoading, isSuccess, updateProfile } = useUpdateProfile(name, profile.docId);
  const tw = useTailwind();

  return (
    <Layout>
      <Heading text={'Profile'} isCenter={true} backBtn={true} />
      <Padding style={tw('bg-white')}>
        {
          isSuccess && (
            <View style={tw('p-2 py-4 rounded-lg bg-green-500')}>
              <Text style={tw('text-white text-center')}>Profile updated successfully</Text>
            </View>
          )
        }
        {
          (isProfileLoading || isLoading)
            ?
            <Loader />
            :
            <>
              <Field onChange={setName} value={name} placeholder={'Enter name'} />
              <Button onPress={updateProfile} title={'Update Profile'} />
              <Button onPress={logout} title={'Logout'} colors={['bg-gray-200', COLORS.gray]} />
            </>
        }
      </Padding>
    </Layout>
  );
};

export default Profile;
