import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "../../firebase";
import { useAuth } from './useAuth';


export const useUpdateProfile = (name: string, docId: string) => {
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateProfile = async () => {
        setIsLoading(true);

        if (!user) return;

        try {
            const docReference = doc(db, 'users', docId);
            await updateDoc(docReference, {
                displayName: name,
            });

            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setIsLoading(false);
            }, 3000);
        } catch (error: any) {
            Alert.alert('Error updating profile:', error.message)
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, updateProfile, isSuccess }

}
