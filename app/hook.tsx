import { 
    useCallback, 
    useEffect, 
    useState 
} from "react"
import { Asset } from 'expo-asset'
import { router } from "expo-router"
import { loadAsync } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

import { Assets } from "@/constants/assets"
import { Fonts } from "@/constants/fonts";

import { TPrefetchError } from "./type"

export default {}

export const useAppHook = ()=>{

    const [assetPrefetchError,setAssetPrefetchError] = useState<TPrefetchError | null>(null);

    const handleAppAssetsPrefetch = useCallback(async (
        imageAssets:typeof Assets,
        fontAssets:typeof Fonts
    )=>{
        const assetPaths = (Object.keys(imageAssets) as Array<keyof typeof imageAssets>).map((key)=>imageAssets[key])
        
        try{
            await Asset.loadAsync(assetPaths)
            await loadAsync(fontAssets)
        }
        catch(err){
            console.log(err,'err')
            let errObj:TPrefetchError = {
                message:'',
                cause:''
            }
            if(err instanceof Error){
                errObj = {
                    message:'Something went wrong when prefetching asset!',
                    cause:err.message.split('→ ')[1]
                }
            }
            return errObj
        }
      
    },[])

    const handleNavigateToHome = useCallback(()=>{
        router.replace('/home')
    },[])

    const handleHomeRoute = useCallback(async()=>{
        const check= await handleAppAssetsPrefetch(
            Assets,
            Fonts
        )
        if(check){
            setAssetPrefetchError(check)
            SplashScreen.hide();
        }
        else{
            handleNavigateToHome()
        }
    },[handleAppAssetsPrefetch,handleNavigateToHome])


    useEffect(()=>{
        handleHomeRoute()
    },[])

    return{
        assetPrefetchError
    }
}