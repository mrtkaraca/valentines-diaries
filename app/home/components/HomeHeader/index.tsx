import { 
    View,
    Image
} from "react-native"

import { HomeAssets } from "@/constants/assets"
import { HomeHeaderStyle } from "./style"
import { HomeColors } from "@/constants/colors"


export default {}

export const HomeHeader = ()=>{
    return(
        <View
            style={HomeHeaderStyle.HomeHeaderContainer}
        >
            <View
                style={HomeHeaderStyle.HomeHeaderValentinesContainer}
            >
                <Image
                    source={HomeAssets.valentines}
                    resizeMode="contain"
                    tintColor={HomeColors.image.tinColor}
                    style={HomeHeaderStyle.HomeHeaderImage}
                />
            </View>
            <View
                style={HomeHeaderStyle.HomeHeaderDiariesContainer}
            >
                <Image
                    source={HomeAssets.diaries}
                    resizeMode="contain"
                    tintColor={HomeColors.image.tinColor}
                    style={HomeHeaderStyle.HomeHeaderImage}
                />
            </View>
        </View>
    )
}

