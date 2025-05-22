import { forwardRef,memo } from "react"
import { View } from "react-native"

import { PaginationScreen } from "../PaginationScreen"

import { PaginationInnerContainerStyle } from "./style"
import { TPaginationInnerContainerProps, TTPaginationInnerContainerRefProps } from "./type"
import { usePaginationInnerContainerHook } from "./hook"

export default {}

export const PaginationInnerContainer =  memo(forwardRef<TTPaginationInnerContainerRefProps,TPaginationInnerContainerProps>((props,ref)=>{

    const {
        currentPaginationIndex,
        PaginationData
    } = props

    const {
        paginationScreenTranslateX
    } = usePaginationInnerContainerHook({
        paginationDataLength:PaginationData.length
    },ref)

    return(
        <View
            style={[
                PaginationInnerContainerStyle.PaginationInnerContainerContainer,
            ]}
        >
            {PaginationData.map((screen,index)=>{
                return(
                    <PaginationScreen
                        key={screen.id}
                        paginationScreenTranslateX={paginationScreenTranslateX}
                    >
                        {screen.component(screen.id,index,currentPaginationIndex)}
                    </PaginationScreen>
                )
            })}
        </View>
    )
}))