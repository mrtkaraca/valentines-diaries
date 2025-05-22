import { 
    View,
} from "react-native"

import { HomeContainerStyle } from "./style"
import { THomeContainerProps } from "./type"

export default {
    
}

export const HomeContainer = (props:THomeContainerProps)=>{
    return(
        <View
            style={HomeContainerStyle.HomeContainerContainer}
        >
            <View
                style={HomeContainerStyle.HomeContainerInner}
            >
                {props.children}
            </View>
        </View>
    )
}

