import {Text } from "react-native";
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useTextButtonHook } from "./hooks";
import { TTextButtonProps } from "./type";
import { TextButtonStyle } from "./style";

export const TextButton = (props:TTextButtonProps)=>{

    const { 
        textButtonColor,
        textButtonOpacityColor,
        textButtonTextLabel,
        textButtonBorderRadius,
        disabled,
        handleOnPress,
        style,
        ...textProps
    } = props;

    const {
        gesture,
        buttonContainerRef,
        buttonOpacityStyle,
        textButtonAnimStyle,
    } = useTextButtonHook({
        isButtonDisabled:disabled,
        handleOnPress:handleOnPress
    });


    return(
        <GestureHandlerRootView
            onStartShouldSetResponder={()=>true}
            style={
                TextButtonStyle.TextButtonStyleContainer 
            }
        >
            <GestureDetector gesture={gesture}>
                <Animated.View
                    ref={buttonContainerRef}
                    style={
                        [
                            textButtonAnimStyle,
                            TextButtonStyle.TextButtonStyleInnerContainer,
                            {
                                backgroundColor:textButtonColor,
                                borderRadius:textButtonBorderRadius
                            }
                        ]
                    }
                >
                    <Text
                        style={[
                            TextButtonStyle.TextButtonStyleInnerContainerDefaultText,
                            style
                        ]}
                        {...textProps}
                    >
                        {textButtonTextLabel}
                    </Text>
                    <Animated.View
                        style={
                            [
                                buttonOpacityStyle,
                                TextButtonStyle.TextButtonStyleInnerContainerOpacity,
                                {
                                    backgroundColor:textButtonOpacityColor
                                }
                            ]
                        }
                    />
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
        
    )
}
