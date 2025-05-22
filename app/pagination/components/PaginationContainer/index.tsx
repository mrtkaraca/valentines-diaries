import { View } from "react-native"
import { TPaginationContainerProps } from "./type"
import { PaginationContainerStyle } from "./style."

export default {}

export const PaginationContainer = (props:TPaginationContainerProps) =>{
    return(
        <View
            style={PaginationContainerStyle.PaginationContainerContainer}
        >
            {props.children}
        </View>
    )
}