import { StyleSheet } from "react-native"

import { StatusBarHeight } from "@/constants/size"
import { HomeColors } from "@/constants/colors"

export default {}

export const HomeContainerStyle = StyleSheet.create({
    HomeContainerContainer:{
        flex:1,
        backgroundColor:HomeColors.containerBackgroundColor,
        paddingTop:StatusBarHeight
    },
    HomeContainerInner:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    }
})