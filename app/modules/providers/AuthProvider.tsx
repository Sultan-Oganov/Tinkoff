import { createContext, FC, ReactNode, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, login, logout, register } from "../../firebase";

type Props = {
    children?: ReactNode;
};

interface IContext {
    user: User | null;
    isLoading: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const registerHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const { user } = await register(email, password);
            //add new user to table in firebase
            await addDoc(collection(db, 'users'), {
                //tables inputs
                _id: user.uid,
                displayName: 'No name'
            });
        } catch (error: any) {
            Alert.alert('Error reg:', error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            await login(email, password);
        } catch (error: any) {
            Alert.alert('Error login:', error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const logoutHandler = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (error: any) {
            Alert.alert('Error logout:', error.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => onAuthStateChanged(auth, (user) => {
        setUser(user || null);
        setIsLoadingInitial(false);
    }), [])

    const value = useMemo(() => ({
        user,
        isLoading,
        register: registerHandler,
        login: loginHandler,
        logout: logoutHandler
    }), [user, isLoading]);

    return (
        <AuthContext.Provider value={value}>
            {!isLoadingInitial && children}
        </AuthContext.Provider>
    );
}