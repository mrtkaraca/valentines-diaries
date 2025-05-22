import { 
    useCallback
} from "react"
import { 
    router 
} from "expo-router"

export default {}

export const useFinalHook = ()=>{

    
    const handleBackButton = useCallback(()=>{
        if(router.canGoBack()){
            router.back()
        }
        else{
            router.navigate('/pagination')
        }
    },[])


    return{
        handleBackButton,
    }
}