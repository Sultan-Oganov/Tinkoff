import React, { FC, useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { useTailwind } from 'tailwind-rn';
import Button from "../../components/ui/Button";
import Field from "../../components/ui/Field";
import Loader from "../../components/ui/Loader";
import { useAuth } from "../../modules/hooks/useAuth";
import { styleCenter } from "../styles";

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();
  const tw = useTailwind();
  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);

  const handleChangeData = (prop: string) => (value: string) => {
    setData({ ...data, [prop]: value });
  };

  const handleChangeReg = () => {
    setIsReg(!isReg)
  }

  const handleAuth = async () => {
    const { email, password } = data;

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }

    setData({} as IData);
  }

  return (
    <View style={tw(styleCenter)}>
      <View style={tw('mx-5 justify-center items-center h-full')}>
        <View style={tw('w-9/12')}>
          <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>{isReg ? 'Sign Up' : 'Sign In'}</Text>
          {
            isLoading
              ? <View style={tw(`${isLoading ? 'justify-start' : 'justify-end'}`)}><Loader /></View>
              :
              <KeyboardAvoidingView
                style={tw('w-full flex-auto justify-start')}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <Field
                  value={data.email}
                  placeholder={'Enter email'}
                  onChange={handleChangeData('email')}
                />
                <Field
                  value={data.password}
                  placeholder={'Enter password'}
                  onChange={handleChangeData('password')}
                  isSecure={true}
                />
                <Button title={'Let\'s go'} onPress={handleAuth} />
                <Pressable onPress={handleChangeReg}>
                  <Text style={tw('text-gray-800 opacity-30 text-right text-sm')}>{isReg ? 'Login' : 'Register'}</Text>
                </Pressable>
              </KeyboardAvoidingView>
          }
        </View>


      </View>
    </View >
  );
};

export default Auth;
