import { View } from "react-native"

import { TextButton } from "@/components/TextButton"

import { PaginationColors } from "@/constants/colors"

import { usePaginationFooterHook } from "./hook"
import { PaginationFooterStyle } from "./style"
import { TPaginationFooterProps } from "./type"

export default {}

export const PaginationFooter = (props:TPaginationFooterProps)=>{


    const {
        paginationInnerContainerRef,
        paginationDataLength,
        currentPaginationIndex,
        handleSetCurrentPaginationIndex
    } = props

    const {
        handlePreviousPaginationScreen,
        handleNextPaginationScreen,
        handleNavigateFinal
    } = usePaginationFooterHook({
        paginationInnerContainerRef,
        handleSetCurrentPaginationIndex
    })

    return(
        <View
            style={PaginationFooterStyle.PaginationFooterContainer}
        >
            <View>
                {currentPaginationIndex !== 0 &&
                    <TextButton
                        textButtonTextLabel="Previous"
                        textButtonOpacityColor={PaginationColors.textButton.opacityColor}
                        style={{
                            color:PaginationColors.textButton.tinColor
                        }}
                        handleOnPress={handlePreviousPaginationScreen}
                    />
                }
            </View>
            <View>
                <TextButton
                    textButtonTextLabel="Next"
                    textButtonOpacityColor={PaginationColors.textButton.opacityColor}
                    style={{
                        color:PaginationColors.textButton.tinColor
                    }}
                    handleOnPress={currentPaginationIndex !== paginationDataLength-1 ? 
                        handleNextPaginationScreen
                        : 
                        handleNavigateFinal
                    }
                />
            </View>
        </View>
    )
}