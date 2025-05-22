import { useAnimatedStyle } from "react-native-reanimated"
import { TPaginationScreenHookProps } from "./type"

export default {}

export const usePaginationScreenHook = (props:TPaginationScreenHookProps)=>{


    const {
        paginationScreenTranslateX
    } = props


    const paginationScreenAnimatedStyle = useAnimatedStyle(()=>{
        return{
            transform:[
                {translateX:paginationScreenTranslateX.value}
            ]
        }
    })

    return{
        paginationScreenAnimatedStyle
    }
}