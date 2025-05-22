import * as SplashScreen from 'expo-splash-screen';

import { AssetsPrefetchError } from './components/AssetsPrefetchError';

import { useAppHook } from "./hook";

SplashScreen.preventAutoHideAsync()

export default function Index(){

    const {
        assetPrefetchError
    } = useAppHook()

    if(assetPrefetchError){
        return(
            <AssetsPrefetchError
                message={assetPrefetchError.message}
                cause={assetPrefetchError.cause}
            />
        )
    }

    return null


}
