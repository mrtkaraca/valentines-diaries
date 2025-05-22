import {  useCallback, useEffect, useRef, useState } from "react"

import { TTPaginationInnerContainerRefProps } from "./components/PaginationInnerContainer/type"

import { PaginationComponentsData } from "./helper"

export default {}

export const usePaginationHook = ()=>{

    const paginationInnerContainerRef = useRef<TTPaginationInnerContainerRefProps | null>(null)

    const [currentPaginationIndex,setCurrentPaginationIndex] = useState(0)

    const handleSetCurrentPaginationIndex = useCallback((index:number)=>{
        setCurrentPaginationIndex(index)
    },[])

    return{
        PaginationComponentsData,
        paginationInnerContainerRef,
        currentPaginationIndex,
        handleSetCurrentPaginationIndex
    }
}