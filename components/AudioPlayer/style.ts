import { AudioPlayerColors } from "@/constants/colors"
import { AudioPlayerSizes } from "@/constants/size"
import { PixelRatio, StyleSheet } from "react-native"

export default {}

export const AudioPlayerStyle = StyleSheet.create({
    AudioPlayerContainer:{
        flexDirection:'row',
        borderColor:AudioPlayerColors.audioPlayerContaionerBorderColor,
        borderWidth:1,
        borderRadius:12/PixelRatio.get(),
        padding:16/PixelRatio.get(),
        gap:12/PixelRatio.get()
    },
    AudioPlayerBarContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:AudioPlayerColors.audioPlayerBarContainerColor,
        height:AudioPlayerSizes.audioPlayerBarContainerSize,
        alignSelf:'center'
    },
    AudioPlayerBar:{
        height:'100%',
        backgroundColor:AudioPlayerColors.audioPlayerBarColor,
    },
    AudioPlayerTimerContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
})