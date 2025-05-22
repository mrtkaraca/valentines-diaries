import { useCallback, useImperativeHandle } from "react"
import { useWindowDimensions } from "react-native"
import { 
    Extrapolation, 
    interpolate, 
    runOnUI, 
    useAnimatedReaction, 
    useAnimatedStyle, 
    useDerivedValue, 
    useSharedValue, 
    withTiming
} from "react-native-reanimated"


import { TPaginationInnerContainerHookProps, TTPaginationInnerContainerRefProps } from "./type"

export default {}

export const usePaginationInnerContainerHook = (props:TPaginationInnerContainerHookProps,ref:React.ForwardedRef<TTPaginationInnerContainerRefProps>)=>{

    const {
        paginationDataLength
    } = props

    const { width } = useWindowDimensions()

    const paginationScreenAnimationDuration = 300

    const paginationCurrentScreenIndex = useSharedValue(0)

    const paginationScreenTranslateX = useSharedValue(0)

    const paginationScreenIndexLength = useDerivedValue(()=>{
        return paginationDataLength - 1
    })
    const paginationScreenTranslateXInterpolate = useDerivedValue(()=>{
        return interpolate(
            paginationCurrentScreenIndex.value,
            [0,paginationScreenIndexLength.value],
            [0,-(paginationScreenIndexLength.value*width)],
            Extrapolation.CLAMP
        )
    })

    const handlePaginationScreenTranslateX = useCallback(()=>{
        'worklet'
        paginationScreenTranslateX.value = withTiming(
            paginationScreenTranslateXInterpolate.value,
            {
                duration:paginationScreenAnimationDuration
            }
        )
    },[])

    const handleNextPaginationScreen:TTPaginationInnerContainerRefProps['handleNextPaginationScreen'] = useCallback((
        callback
    )=>{
        runOnUI(()=>{
            if(paginationCurrentScreenIndex.value < paginationScreenIndexLength.value){
                paginationScreenTranslateX.value = paginationScreenTranslateXInterpolate.value
                paginationCurrentScreenIndex.value += 1
                callback(paginationCurrentScreenIndex.get())
            }
        })()
    },[])

    const handlePreviousPaginationScreen:TTPaginationInnerContainerRefProps['handlePreviousPaginationScreen'] = useCallback((
        callback
    )=>{
        runOnUI(()=>{
            if(paginationCurrentScreenIndex.value !== 0){
                paginationScreenTranslateX.value = paginationScreenTranslateXInterpolate.value
                paginationCurrentScreenIndex.value -= 1
                callback(paginationCurrentScreenIndex.get())
            }
        })()
    },[])

    useAnimatedReaction(
        ()=>paginationCurrentScreenIndex,
        ()=>{
            handlePaginationScreenTranslateX()
        }
    )

    useImperativeHandle(
        ref,
        ()=>{
            return{
                handleNextPaginationScreen,
                handlePreviousPaginationScreen,
            }
        }
    )

    return{
        paginationScreenTranslateX,
    }
}