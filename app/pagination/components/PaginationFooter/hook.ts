import { useCallback, useRef } from "react"

import { TPaginationFooterHookProps } from "./type"
import { runOnJS, runOnUI, useSharedValue } from "react-native-reanimated"
import { router } from "expo-router"

export default {}

export const usePaginationFooterHook = (props:TPaginationFooterHookProps)=>{
    const {
        paginationInnerContainerRef,
        handleSetCurrentPaginationIndex
    } = props


    const handleNavigateFinal = useCallback(()=>{
        router.navigate('/final')
    },[])

    const handleNextPaginationScreen = useCallback(()=>{
        if(paginationInnerContainerRef.current){
            paginationInnerContainerRef.current.handleNextPaginationScreen(
                (currentPaginationIndex)=>{
                    'worklet'
                    runOnJS(handleSetCurrentPaginationIndex)(currentPaginationIndex)
                }
            )
        }
    },[])

    const handlePreviousPaginationScreen = useCallback(()=>{
        if(paginationInnerContainerRef.current){
            paginationInnerContainerRef.current.handlePreviousPaginationScreen(
                (currentPaginationIndex)=>{
                    'worklet'
                    runOnJS(handleSetCurrentPaginationIndex)(currentPaginationIndex)
                }
            )
        }
    },[])

    return{
        handleNavigateFinal,
        handleNextPaginationScreen,
        handlePreviousPaginationScreen
    }
}