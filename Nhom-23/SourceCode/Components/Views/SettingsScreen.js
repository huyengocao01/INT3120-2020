// Core
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// style color
import {commonColor} from '../Common/Color';

export default class HeaderHomeScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center",alignItems: "center" }}>
                <Text style={commonColor.mainColor}>This is settings view</Text>
            </View>
        )
    }
}


