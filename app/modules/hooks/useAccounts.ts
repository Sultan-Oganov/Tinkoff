import { useEffect, useState } from "react";
import { IStory } from "../types/stories";
import { onSnapshot, where } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { db } from "../../firebase";
import { IAccount } from "../types/accounts";
import { useAuth } from "./useAuth";


export const useAccounts = () => {
    const { user } = useAuth();
    const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return onSnapshot(
            query(collection(db, 'accounts'), where('userId', '==', user?.uid)),
            snapshot => {
                const data = snapshot.docs.map(d => ({
                    _id: d.id,
                    ...d.data()
                }) as IAccount);
                setAccounts(data);
                setIsLoading(false)

            });
    }, []);

    return { accounts, isLoading }




};