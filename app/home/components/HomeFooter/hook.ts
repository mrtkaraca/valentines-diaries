import { router } from "expo-router"
import { useCallback } from "react"

export default {

}

export const useHomeFooterhook = ()=>{

    const handleNavigatePaginationScreen = useCallback(()=>{
        router.navigate('/pagination')
    },[])

    return{
        handleNavigatePaginationScreen
    }
}