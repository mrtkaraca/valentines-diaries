import { TTPaginationInnerContainerRefProps } from "../PaginationInnerContainer/type";

export default {}

export type TPaginationFooterProps = {
    paginationInnerContainerRef: React.MutableRefObject<TTPaginationInnerContainerRefProps | null>
    currentPaginationIndex: number
    paginationDataLength: number
    handleSetCurrentPaginationIndex: (index: number) => void
}

export type TPaginationFooterHookProps = Pick<TPaginationFooterProps,
    'paginationInnerContainerRef' |
    'handleSetCurrentPaginationIndex'
>