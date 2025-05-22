import { SharedValue } from "react-native-reanimated"

export default {}

export type TPaginationProps = {
    children:React.ReactNode
    paginationScreenTranslateX: SharedValue<number>
}

export type TPaginationScreenHookProps = Pick<TPaginationProps,
    'paginationScreenTranslateX'
>