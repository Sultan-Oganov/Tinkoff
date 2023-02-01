import React from "react";
import { ScrollView, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useStories } from "../../modules/hooks/useStories";
import StoryItem from "../StoryItem/StoryItem";
import Loader from "../ui/Loader";

const Stories = () => {
    const { stories, isLoading } = useStories();
    const tw = useTailwind();

    return (
        <View style={tw('my-7')}>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {stories.map((story) => <StoryItem key={story._id} {...{ story }} />)}
                    </ScrollView>
                )
            }
        </View>
    );
};

export default Stories;
