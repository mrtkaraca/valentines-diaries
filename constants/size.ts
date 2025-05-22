import Constants from 'expo-constants';

import { Dimensions, PixelRatio } from 'react-native';

export const StatusBarHeight = Constants.statusBarHeight

export const PaginationSizes={
    iconButon:{
        iconButtonSize:64/PixelRatio.get()
    }
}

export const FinalSizes={
    iconButton:{
        iconButtonSize:64/PixelRatio.get()
    }
}

export const AudioPlayerSizes={
    audioPlayerBarContainerSize:16/PixelRatio.get(),
    iconButton:{
        iconButtonSize:64/PixelRatio.get()
    }
}

export const HomeSizes={
    textButton:{
        textBorderRadius:9999
    }
}

