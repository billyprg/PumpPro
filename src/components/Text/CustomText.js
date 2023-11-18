import { Text } from 'react-native'
import React from 'react'

import { Fonts, Metrix, Colors }from '../../config'
import { scale } from 'react-native-size-matters'

function LightText({
    fontFamily = Fonts.Poppins400,
    fontSize = scale(14),
    color = Colors.Black,
    textAlign = 'center',
    textDecorationLine = 'none',
    // textDecorationColor = Colors.Primary,
    textDecorationStyle = 'solid',
    onPress,
    text,
    style,
    ellipsizeMode = "tail",
    numberOfLines = 5,
}) {
    return (
        <Text
            style={[{
                fontFamily,
                fontSize: scale(fontSize),
                color,
                textAlign,
                textDecorationLine,
                // textDecorationColor,
                textDecorationStyle,
            }, style]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {text}
        </Text>
    )
}


function BoldText({
    fontFamily = Fonts.Poppins700,
    fontSize = scale(18),
    color = Colors.Black,
    textAlign = 'center',
    textDecorationLine = 'none',
    // textDecorationColor = Colors.Primary,
    textDecorationStyle = 'solid',
    text,
    style,
    ellipsizeMode = "tail",
    numberOfLines = 5,
}) {
    return (
        <Text
            style={[{
                fontFamily,
                fontSize: scale(fontSize),
                color,
                textAlign,
                textDecorationLine,
                // textDecorationColor,
                textDecorationStyle,
            }, style]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {text}
        </Text>
    )
}

function HeadingText({
    fontFamily = Fonts.Poppins700,
    fontSize = scale(18),
    color = Colors.Black,
    textAlign = 'center',
    textDecorationLine = 'none',
    textDecorationColor = Colors.Primary,
    textDecorationStyle = 'solid',
    text,
    style
}) {
    return (
        <Text
            style={[{
                fontFamily,
                fontSize: scale(fontSize),
                color,
                textAlign,
                textDecorationLine,
                textDecorationColor,
                textDecorationStyle,
            }, style]}
        >
            {text}
        </Text>
    )
}


export default { LightText, BoldText, HeadingText }
