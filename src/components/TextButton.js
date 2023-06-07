import  React from 'react';
import{
    TouchableOpacity,
    Text}from'react-native';
import {fontSizes,colors} from"../Constants";
const TextButton=({
   
    label,
    onPress
}) => {
    return(
        <TouchableOpacity 
        style={{
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor:colors.lightblue,
            width:80,
            borderRadius:30,
            marginHorizontal:270,        }}
        onPress={onPress}>
            <Text 
            style={{
                colors: colors.white,
                ...fontSizes.small,
            }}>
                {label}

            </Text>
        </TouchableOpacity>
    )
}
export default TextButton;