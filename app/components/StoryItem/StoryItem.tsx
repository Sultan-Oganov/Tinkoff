import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { FC } from "react";
import { IStory } from "../../modules/types/stories";
import { useTailwind } from "tailwind-rn";
import { useData } from "../../modules/hooks/useData";



const StoryItem: FC<{ story: IStory }> = ({ story }) => {
    const tw = useTailwind();
    const { setActiveStoryes } = useData();

    const handleSetStory = () => {
        setActiveStoryes(story.images)
    }

    return (
        <Pressable onPress={handleSetStory}>
            <View style={{
                ...tw('w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400'),
                padding: 2,
                borderWidth: 1,
            }}>
                <ImageBackground
                    source={{
                        uri: story.images[0]
                    }}
                    resizeMode={'cover'}
                    style={tw('w-full h-full justify-end')}
                    imageStyle={tw('rounded-xl')}
                >
                    <Text style={{
                        ...tw('text-white'),
                        fontSize: 12,
                        margin: 8
                    }}>{story.heading}</Text>
                </ImageBackground>
            </View>
        </Pressable>
    );
};

export default StoryItem;
