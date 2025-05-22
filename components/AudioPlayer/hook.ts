import { Audio, AVPlaybackSource, AVPlaybackStatus, AVPlaybackStatusSuccess } from "expo-av";

import { TAudioPlayerHookProps } from "./type"
import { useCallback, useEffect, useRef, useState } from "react";
import { interpolate, runOnJS, useAnimatedReaction, useAnimatedStyle, useDerivedValue, useSharedValue } from "react-native-reanimated";

export default {}

export const useAudioPlayerHook = (props:TAudioPlayerHookProps)=>{
    
    const {
        audioData
    } = props

    const [playbackSoundActivitiy,setIsPlaybackSoundPlaying] = useState<'play' | 'pause' | 'finished'>('pause')
    const playbackSoundObject = useRef<Audio.Sound | null>(null)
    const [playBackSoundTime,setPlayBackSoundTime] = useState<{
        current:number,
        duration:number
    } | null>(null)

    const playBackObjectActivityStatus = useSharedValue<'play' | 'pause' | 'finished'>('pause')
    const playBackObjectStatus = useSharedValue<AVPlaybackStatusSuccess | null>(null)

    const playbackBarCurrentTimeInterpolate = useDerivedValue(()=>{
        return playBackSoundTime ? interpolate(
            playBackSoundTime.current,
            [0,playBackSoundTime.duration],
            [0,100]
        )
        :
        0
    })

    const playbackBarAnimateStyle = useAnimatedStyle(()=>{
        return{
            width:`${Number(playbackBarCurrentTimeInterpolate.value)}%`
        }
    })

    const _onPlaybackStatusUpdate = async(playbackStatus:AVPlaybackStatus) => {
        if(!playbackStatus.isLoaded){
            if(playbackStatus.error){
           
            }
        } 
        else{

            playBackObjectStatus.value = playbackStatus

            if(playbackStatus.isPlaying){
                playBackObjectActivityStatus.value = 'play'
            } 
            else{
                playBackObjectActivityStatus.value = 'pause'
            }

            if(playbackStatus.isBuffering){

            }
        
            if(playbackStatus.didJustFinish && !playbackStatus.isLooping) {
                playBackObjectActivityStatus.value = 'finished'
            }

        }
      };

    const handleAudioLoad = useCallback(async(
        audioData:AVPlaybackSource
    )=>{
        const { sound,status } = await Audio.Sound.createAsync(
            audioData,
            {
                progressUpdateIntervalMillis:100,
            },
            _onPlaybackStatusUpdate,
            false
        );
        
        if(status.isLoaded){
            setPlayBackSoundTime({
                current:status.positionMillis,
                duration:status.durationMillis || 0
            })
        }
        playbackSoundObject.current = sound
    },[])

    const handleAudioPlayAndPause = useCallback(async()=>{
        if(playbackSoundObject.current){
            if(playBackObjectActivityStatus.value === 'pause'){
                await playbackSoundObject.current.playAsync()
            }
            if(playBackObjectActivityStatus.value === 'play'){
                await playbackSoundObject.current.pauseAsync()
            }
        }
    },[])

    const handlePlaybackReplay = useCallback(async()=>{
        if(playbackSoundObject.current){
            if(playbackSoundActivitiy === 'finished'){
                await playbackSoundObject.current.setStatusAsync({
                    positionMillis:0,
                    shouldPlay:false
                })
            }
        }
    },[playbackSoundActivitiy])


    useEffect(()=>{

        handleAudioLoad(audioData)

        return ()=>{
            if(playbackSoundObject.current){
                playbackSoundObject.current.unloadAsync()
            }
        }
    
    },[])

    useAnimatedReaction(
        ()=>playBackObjectActivityStatus,
        ()=>{
            runOnJS(setIsPlaybackSoundPlaying)(playBackObjectActivityStatus.value)
        }
    )

    useAnimatedReaction(
        ()=>playBackObjectStatus,
        ()=>{
            if(playBackObjectStatus.value){
                runOnJS(setPlayBackSoundTime)({
                    current:playBackObjectStatus.value.positionMillis,
                    duration:playBackObjectStatus.value.durationMillis || 0
                })
            }
        }
    )

    useEffect(()=>{
        handlePlaybackReplay()
    },[playbackSoundActivitiy])

    return{
        playbackSoundActivitiy,
        playBackSoundTime,
        playbackBarAnimateStyle,
        handleAudioPlayAndPause
    }
}