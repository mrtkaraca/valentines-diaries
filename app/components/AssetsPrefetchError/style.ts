import { StyleSheet } from "react-native"

export default {}

export const AssetsPrefetchErrorStyle = StyleSheet.create({
    AssetsPrefetchErrorStyleContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    AssetsPrefetchErrorStyleInnerContainer:{
        padding:16,
        gap:16,
        borderRadius:16,
        borderWidth:1,
        borderColor:'gray'
    },
    AssetsPrefetchErrorStyleMessageText:{
        fontSize:24
    },
    AssetsPrefetchErrorStyleCauseText:{
        fontSize:16
    }
})