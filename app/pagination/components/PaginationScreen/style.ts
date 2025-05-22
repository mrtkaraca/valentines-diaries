import { PixelRatio, StyleSheet } from "react-native"

export default {}

export const PaginationStyle = StyleSheet.create({
    PaginationActivityIndicator:{
        height:'100%',
        width:'100%',
    },
    PaginationContainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    PaginationInnerContainer:{
        width:'100%',
        padding:24/PixelRatio.get(),
    },
    PaginationInnerContentContainer:{
        flexGrow:1,
        justifyContent: "center",
        alignItems: "center",
        gap:36/PixelRatio.get(),
    },
    PaginationInnerContentFooterContainer:{
        height:12/PixelRatio.get()
    },
})