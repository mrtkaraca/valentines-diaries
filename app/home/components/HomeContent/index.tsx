import { 
    View,
    Image
} from "react-native"

import { HomeAssets } from "@/constants/assets"

import { HomeContentStyle } from "./style"

export const HomeContent = ()=>{
    return(
        <View
            style={HomeContentStyle.HomeContentContainer}
        >
            <Image
                source={HomeAssets.coupleCat}
                resizeMode="contain"
                style={HomeContentStyle.HomeContentImage}
            />
        </View>
    )
}

export default {
    
}

