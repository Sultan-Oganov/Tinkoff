import { useEffect, useState } from "react";
import { IMessage } from "../types/messages";
import { onSnapshot, orderBy } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { db } from "../../firebase";
import dayjs from "dayjs";


export const useMessages = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return onSnapshot(
            query(collection(db, 'messages'), orderBy('timestamp', 'asc')),
            snapshot => {
                setMessages(
                    snapshot.docs.map(d => d.data()?.timestamp ?
                        ({
                            _id: d.id,
                            ...d.data(),
                            timestamp: dayjs.unix(d.data()?.timestamp.seconds).format('HH:mm')
                        }) as IMessage
                        : ({
                            _id: d.id,
                            ...d.data()
                        }) as IMessage)
                );
                setIsLoading(false);

            });
    }, [])

    return { messages, isLoading }
};