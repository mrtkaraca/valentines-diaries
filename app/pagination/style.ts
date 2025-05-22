import { FontsName } from "@/constants/fonts"
import { PixelRatio, StyleSheet } from "react-native"

export default {}

export const PaginationDataStyle = StyleSheet.create({
    PaginationDataText:{
        fontSize:36/PixelRatio.getFontScale(),
        fontFamily:FontsName.yellowTailRegular,
        letterSpacing:1,
    },
    PaginationDataImageContainer:{
        width:'100%',
        alignContent:'center',
        margin:0
    },
    PaginationDataImage:{
        width:'100%',
        alignSelf:'center',
    }
})