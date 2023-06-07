import  React from 'react';
import{
    TouchableOpacity,
    Text}from'react-native';
import {fontSizes,colors} from"../Constants";
const Addbutton=({
   
    label,
    onPress
}) => {
    return(
        <TouchableOpacity 
        style={{
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor:colors.lightblue,
            width:135,
            height:27,
            borderRadius:30,
            marginHorizontal:119,        }}
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
export default Addbutton;