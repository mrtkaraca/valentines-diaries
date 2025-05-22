import { DerivedValue, SharedValue } from "react-native-reanimated";

export default {}

export type TPaginationInnerContainerProps = {
    PaginationData: {
        id: string;
        component: (
            id: string,
            index?:number,
            currentIndex?:number,
        ) => React.JSX.Element;
    }[]
    currentPaginationIndex: number
}

export type TTPaginationInnerContainerRefProps = {
    handlePreviousPaginationScreen: (
        callback:(currentPaginationIndex:number)=>void
    ) => void
    handleNextPaginationScreen: (
        callback:(currentPaginationIndex:number)=>void
    ) => void
}

export type TPaginationInnerContainerHookProps = {
    paginationDataLength:number
}