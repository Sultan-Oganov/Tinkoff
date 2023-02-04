import React, { FC } from "react";
import { View } from "react-native";
import { menu } from "../../modules/mocks/moreMenusList";
import MenuItem from "../MenuItem/MenuItem";

const Menu: FC = () => {

    return (
        <View>
            {menu.map(item => <MenuItem key={item.title} {...{ item }} />)}
        </View>
    );
};

export default Menu;
