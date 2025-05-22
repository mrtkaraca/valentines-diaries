import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Image } from "expo-image";


import { useIconButtonHook } from "./hooks";
import { IconButtonStyle } from "./style";
import { TIconButtonProps } from "./types";

export const IconButton = (props:TIconButtonProps)=>{

    const {
        buttonRef,
        gesture,
        buttonOpacityStyle,
    } = useIconButtonHook({
        isButtonUseable:props.isButtonUseable,
        handleOnPress:props.handleOnPress
    });

    return(
        <GestureHandlerRootView
            style={
                IconButtonStyle.IconButtonContainer
            }
        >
            <GestureDetector gesture={gesture}>
                <Animated.View
                    ref={buttonRef}
                    style={
                        [
                            {
                                height:props.buttonSize ? props.buttonSize : '100%',
                                width:props.buttonSize ? props.buttonSize : '100%',
                                borderRadius:props.buttonSize ? props.buttonSize/2 : undefined,
          
                            },
                            IconButtonStyle.IconButtonInnerContainer
                        ]
                    }
                >
                    <Image
                        source={props.icon}
                        style={{
                            tintColor:props.iconColor,
                            height:'100%',
                            width:'100%',
                        }}
                        contentFit='fill'
                    />
                    <Animated.View
                        style={
                            [
                                buttonOpacityStyle,
                                IconButtonStyle.IconButtonInnerContainerOpacity,
                                {
                                    backgroundColor:props.buttonOpacityColor
                                }
                            ]
                        }
                    />
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
        
    )
}