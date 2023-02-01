import React, { FC } from "react";
import { Text } from "react-native";
//@ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';
import { useTailwind } from "tailwind-rn";
import { useData } from "../../modules/hooks/useData";

const StoryContainer: FC = () => {
    const { activeStoryes, setActiveStoryes } = useData();
    const tw = useTailwind();

    const handleComplete = () => {
        setActiveStoryes(null)
    }

    if (!activeStoryes) {
        return <></>
    }

    return (
        <SC
            visible={true}
            enableProgress={true}
            images={activeStoryes}
            durations={20}
            onComplete={handleComplete}
            containerStyle={tw('w-full h-full')}
        />
    );
};

export default StoryContainer;
