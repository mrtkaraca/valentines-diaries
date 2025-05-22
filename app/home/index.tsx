import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

import { HomeHeader } from "./components/HomeHeader";
import { HomeContent } from "./components/HomeContent";
import { HomeFooter } from "./components/HomeFooter";
import { HomeContainer } from "./components/HomeContainer";



const index = ()=>{

    useEffect(()=>{
        SplashScreen.hide()
    },[])

    return(
        <HomeContainer>
            <HomeHeader/>
            <HomeContent/>
            <HomeFooter/>
        </HomeContainer>  
    )
}

export default index