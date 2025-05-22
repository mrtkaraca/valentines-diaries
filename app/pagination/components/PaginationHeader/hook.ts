import { useDerivedValue } from "react-native-reanimated"
import { TPaginationHeaderHookProps } from "./type"
import { useCallback, useState } from "react"
import { router } from "expo-router"

export default {
    
}

export const usePaginationHeaderHook = (props:TPaginationHeaderHookProps)=>{

    const {
        
    } = props

    
    const handleBackButton = useCallback(()=>{
        if(router.canGoBack()){
            router.back()
        }
        else{
            router.navigate('/home')
        }
    },[])

    return{
        handleBackButton
    }
}