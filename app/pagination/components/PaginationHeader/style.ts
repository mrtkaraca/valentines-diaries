import { StatusBarHeight } from "@/constants/size"
import { PixelRatio, StyleSheet } from "react-native"

export default {
    
}

export const PaginationHeaderStyle = StyleSheet.create({
    PaginationHeaderContainer:{
        paddingTop:StatusBarHeight
    },
    PaginationHeaderInnerContainer:{
        padding:16/PixelRatio.get(),
        flexDirection:'row',
        justifyContent:'space-between'
    },
    PaginationHeaderItems:{
        justifyContent:'center',
        alignItems:'center'
    },
    PaginationHeaderItemsText:{
        fontSize:36/PixelRatio.get(),
        fontWeight:'500'
    }
})