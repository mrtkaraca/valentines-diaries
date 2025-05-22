import { FinalColors } from "@/constants/colors"
import { FontsName } from "@/constants/fonts"
import { StatusBarHeight } from "@/constants/size"
import { PixelRatio, StyleSheet } from "react-native"

export default {}

export const FinalStyle = StyleSheet.create({
    FinalContainer:{
        flex:1,
        backgroundColor:FinalColors.containerBackgroundColor
    },
    FinalHeaderContainer:{
        paddingTop:StatusBarHeight
    },
    FinalInnerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    FinalItemsContainer:{
        width:'100%',
        padding:16/PixelRatio.get(),
    },
    FinalItemsContentContainer:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
        gap:24/PixelRatio.get(),
    },
    FinalItemsContentFooterContainer:{
        height:12/PixelRatio.get()
    },
    FinalHeaderInnerContainer:{
        padding:16/PixelRatio.get(),
        flexDirection:'row',
        justifyContent:'space-between'
    },
    FinalHeaderItems:{
        justifyContent:'center',
        alignItems:'center'
    },
    FinalaText:{
        fontSize:36/PixelRatio.getFontScale(),
        fontFamily:FontsName.yellowTailRegular,
        letterSpacing:1,
        textAlign:'center'
    },
    FinalmageContainer:{
        width:'100%',
        aspectRatio:1,
        alignContent:'center',
        margin:0
    },
    FinalImage:{
        width:'100%',
        height:'100%',
        alignSelf:'center',
    },
    FinalTextButtonsContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
})