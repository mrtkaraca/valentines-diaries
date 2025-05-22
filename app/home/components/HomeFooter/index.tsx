import { View } from "react-native"

import { TextButton } from "@/components/TextButton"
import { HomeSizes } from "@/constants/size"

import { useHomeFooterhook } from "./hook"
import { HomeColors } from "@/constants/colors"

export default {}

export const HomeFooter = ()=>{

    const {
        handleNavigatePaginationScreen
    } = useHomeFooterhook()

    return(
        <View>
            <TextButton
                textButtonTextLabel="Start :3"
                textButtonOpacityColor={HomeColors.textButton.opacityColor}
                textButtonColor={HomeColors.textButton.buttonColor}
                textButtonBorderRadius={HomeSizes.textButton.textBorderRadius}
                handleOnPress={handleNavigatePaginationScreen}
                style={{
                    color:HomeColors.textButton.tinColor
                }}
            />
        </View>
    )
}