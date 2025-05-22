import { 
    View,
    Text,
 } from "react-native"

import { IconButton } from "@/components/IconButton"

import { PaginationAssets } from "@/constants/assets"
import { PaginationSizes } from "@/constants/size"
import { PaginationColors } from "@/constants/colors"

import { PaginationHeaderStyle } from "./style"
import { TPaginationHeaderProps } from "./type"
import { usePaginationHeaderHook } from "./hook"

export default {}

export const PaginationHeader = (props:TPaginationHeaderProps)=>{

    const {
        paginationDataLength,
        currentPaginationIndex
    } = props
    
    const {
        handleBackButton
    } = usePaginationHeaderHook({
        
    })

    return(
        <View
            style={PaginationHeaderStyle.PaginationHeaderContainer}
        >
            <View
                style={PaginationHeaderStyle.PaginationHeaderInnerContainer}
            >
                <View
                    style={PaginationHeaderStyle.PaginationHeaderItems}
                >
                    <IconButton
                        icon={PaginationAssets.back}
                        iconColor={PaginationColors.iconButton.tinColor}
                        buttonSize={PaginationSizes.iconButon.iconButtonSize}
                        buttonOpacityColor={PaginationColors.iconButton.opacityColor}
                        handleOnPress={handleBackButton}
                    />
                </View>
                <View
                    style={PaginationHeaderStyle.PaginationHeaderItems}
                >
                    <Text
                        style={PaginationHeaderStyle.PaginationHeaderItemsText}
                    >
                        {currentPaginationIndex+1}
                        {"/"}
                        {paginationDataLength}
                    </Text>
                </View>
                <View 
                    style={[
                        PaginationHeaderStyle.PaginationHeaderItems,
                        {
                            width:PaginationSizes.iconButon.iconButtonSize
                        }
                    ]}
                />
            </View>
        </View>
    )
}