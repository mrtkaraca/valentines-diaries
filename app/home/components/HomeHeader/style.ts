import { PixelRatio, StyleSheet } from "react-native"

export default {}

export const HomeHeaderStyle = StyleSheet.create({
    HomeHeaderContainer:{
        width:'100%',
        justifyContent:'center',
    },
    HomeHeaderValentinesContainer:{
        height:100/PixelRatio.get(),
        width:'75%'
    },
    HomeHeaderDiariesContainer:{
        height:100/PixelRatio.get(),
        width:'75%',
        alignSelf:'flex-end'
    },
    HomeHeaderImage:{
        height:'100%',
        width:'100%',
    },
  
})