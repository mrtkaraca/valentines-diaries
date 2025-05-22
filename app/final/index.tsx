import { 
    Fragment 
} from "react"
import { 
    View,
    Text,
    Image,
    ScrollView
} from "react-native"

import { FinalAssets } from "@/constants/assets"
import { FinalColors } from "@/constants/colors"
import { IconButton } from "@/components/IconButton"
import { FinalSizes } from "@/constants/size"

import { FinalStyle } from "./style"
import { useFinalHook } from "./hook"

const index = ()=>{
    
    const {
        handleBackButton,
    } = useFinalHook()

    return(
        <View
            style={FinalStyle.FinalContainer}
        >
            <View
                style={FinalStyle.FinalHeaderContainer}
            >
                <View
                    style={FinalStyle.FinalHeaderInnerContainer}
                >
                    <View
                        style={FinalStyle.FinalHeaderItems}
                    >
                        <IconButton
                            icon={FinalAssets.back}
                            iconColor={FinalColors.iconButton.tinColor}
                            buttonSize={FinalSizes.iconButton.iconButtonSize}
                            buttonOpacityColor={FinalColors.iconButton.opacityColor}
                            handleOnPress={handleBackButton}
                        />
                    </View>
                </View>
            </View>
            <View
                style={FinalStyle.FinalInnerContainer}
            >
                <ScrollView
                    style={FinalStyle.FinalItemsContainer}
                    contentContainerStyle={FinalStyle.FinalItemsContentContainer}
                >
                    <Fragment>
                        <View>
                            <Text
                                style={FinalStyle.FinalaText}
                            >
                                {`Happy Valentine's Day! `}
                            </Text>
                        </View>
                        <View
                            style={FinalStyle.FinalmageContainer}
                        >
                            <Image
                                style={FinalStyle.FinalImage}
                                source={FinalAssets.couples}
                                resizeMode="contain"
                            />
                        </View>
                    </Fragment>
                    <View style={FinalStyle.FinalItemsContentFooterContainer} />
                </ScrollView>
            </View>
        </View>
    )
}

export default index