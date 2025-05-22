import { Fragment, memo, Suspense } from "react"
import { 
    ActivityIndicator, 
    ScrollView, 
    View ,
    Text,
    PixelRatio
} from "react-native"

import { PaginationColors } from "@/constants/colors"

import { TPaginationProps } from "./type"
import { PaginationStyle } from "./style"
import Animated from "react-native-reanimated"
import { usePaginationScreenHook } from "./hook"

export default {}

const CustomActivitiyIndicator = ()=>{
    return(
        <ActivityIndicator 
            style={PaginationStyle.PaginationActivityIndicator} 
            color={PaginationColors.activityIndicatorColor}
            size={'large'}
        />
    )
}

export const PaginationScreen = memo((props:TPaginationProps)=>{

    const {
        paginationScreenTranslateX
    } = props

    const {
        paginationScreenAnimatedStyle
    } = usePaginationScreenHook({
        paginationScreenTranslateX
    })

    return(
        <Animated.View
            style={[
                PaginationStyle.PaginationContainer,
                paginationScreenAnimatedStyle
            ]}
        >
            <Suspense
                fallback={CustomActivitiyIndicator()}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    overScrollMode="never"
                    style={PaginationStyle.PaginationInnerContainer}
                    contentContainerStyle={PaginationStyle.PaginationInnerContentContainer}       
                >
                    {props.children}
                    <View style={PaginationStyle.PaginationInnerContentFooterContainer} />
                </ScrollView>
            </Suspense>
        </Animated.View>
    )
})