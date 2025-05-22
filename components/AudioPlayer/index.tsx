import { Fragment, useEffect } from "react"
import { 
    View,
    Text, 
} from "react-native"
import Animated from "react-native-reanimated"

import { IconButton } from "../IconButton"

import { AudioPlayerAssets } from "@/constants/assets"

import { TAudioPlayerProps } from "./type"
import { useAudioPlayerHook } from "./hook"
import { AudioPlayerStyle } from "./style"
import { AudioPlayerColors } from "@/constants/colors"
import { AudioPlayerSizes } from "@/constants/size"

export default {}

export const AudioPlayer = (props:TAudioPlayerProps)=>{
    

    const {
        audioData
    } = props

    const {
        playbackSoundActivitiy,
        playBackSoundTime,
        playbackBarAnimateStyle,
        handleAudioPlayAndPause
    } = useAudioPlayerHook({
        audioData
    })

    return(
        <View
            style={AudioPlayerStyle.AudioPlayerContainer}
        >
            <View>
                <IconButton
                    icon={playbackSoundActivitiy === 'play' ? AudioPlayerAssets.pause : AudioPlayerAssets.play }
                    iconColor={AudioPlayerColors.iconButton.tinColor}
                    buttonOpacityColor={AudioPlayerColors.iconButton.opacityColor}
                    buttonSize={AudioPlayerSizes.iconButton.iconButtonSize}
                    handleOnPress={handleAudioPlayAndPause}
                />
            </View>
            <View
                style={AudioPlayerStyle.AudioPlayerBarContainer}
            >
                <Animated.View
                    style={[
                        AudioPlayerStyle.AudioPlayerBar,
                        playbackBarAnimateStyle
                    ]}
                />
            </View>
            <View
                style={AudioPlayerStyle.AudioPlayerTimerContainer}
            >
                <Text>
                    {playBackSoundTime &&
                        <Fragment>
                            {Math.floor((playBackSoundTime.current / 1000 / 60) % 60)}{':'}{Math.floor((playBackSoundTime.current / 1000) % 60).toString().padStart(2,"0")}
                            {' / '}
                            {Math.floor((playBackSoundTime.duration / 1000 / 60) % 60)}{':'}{Math.floor((playBackSoundTime.duration / 1000) % 60).toString().padStart(2,"0")}
                        </Fragment>
                    }
                </Text>
            </View>
        </View>
    )
}