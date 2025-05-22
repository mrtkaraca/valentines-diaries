import { PaginationHeader } from "./components/PaginationHeader"
import { PaginationContainer } from "./components/PaginationContainer"
import { PaginationFooter } from "./components/PaginationFooter"
import { PaginationInnerContainer } from "./components/PaginationInnerContainer"

import { usePaginationHook } from "./hook"

const index = ()=>{

    const {
        PaginationComponentsData,
        currentPaginationIndex,
        paginationInnerContainerRef,
        handleSetCurrentPaginationIndex
    } = usePaginationHook()

    return(
        <PaginationContainer>
            <PaginationHeader
                currentPaginationIndex={currentPaginationIndex}
                paginationDataLength={PaginationComponentsData.length}
            />
            <PaginationInnerContainer
                ref={paginationInnerContainerRef}
                currentPaginationIndex={currentPaginationIndex}
                PaginationData={PaginationComponentsData}
            />
            <PaginationFooter
                paginationInnerContainerRef={paginationInnerContainerRef}
                currentPaginationIndex={currentPaginationIndex}
                paginationDataLength={PaginationComponentsData.length}
                handleSetCurrentPaginationIndex={handleSetCurrentPaginationIndex}
            />
        </PaginationContainer>
    )
}

export default index