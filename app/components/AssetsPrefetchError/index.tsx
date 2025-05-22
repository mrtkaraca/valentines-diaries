import { 
    View,
    Text
} from "react-native"

import { TAssetsPrefetchErrorProps } from "./type"
import { AssetsPrefetchErrorStyle } from "./style"

export default {}

export const AssetsPrefetchError = (props:TAssetsPrefetchErrorProps)=>{
    return(
        <View
            style={AssetsPrefetchErrorStyle.AssetsPrefetchErrorStyleContainer}
        >
            <View
                style={AssetsPrefetchErrorStyle.AssetsPrefetchErrorStyleInnerContainer}
            >
                <View>
                    <Text
                        style={AssetsPrefetchErrorStyle.AssetsPrefetchErrorStyleMessageText}
                    >
                        {props.message}
                    </Text>
                </View>
                <View>
                    <Text
                        style={AssetsPrefetchErrorStyle.AssetsPrefetchErrorStyleCauseText}
                    >
                        {props.cause}
                    </Text>
                </View>
            </View>
        </View>
    )
}