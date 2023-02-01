import React, { useEffect, useState } from "react";
import { IStory } from "../types/stories";
import { onSnapshot, orderBy } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { query } from 'firebase/firestore';
import { db } from "../../firebase";


export const useStories = () => {
    const [stories, setStories] = useState<IStory[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return onSnapshot(
            query(collection(db, 'stories')),
            snapshot => {
                const data = snapshot.docs.map(d => ({
                    _id: d.id,
                    ...d.data()
                }) as IStory);
                setStories(data);
                setIsLoading(false)

            });
    }, [])

    return { stories, isLoading }

};