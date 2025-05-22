import { Fragment } from "react"
import { 
    Text, 
    View, 
    Image,
} from "react-native"

import { AudioPlayer } from "@/components/AudioPlayer"
import { PaginationDataAssets } from "@/constants/assets"

import { PaginationDataStyle } from "./style"


export default {}

export const PaginationComponentsData = [
    {
        id:'page1',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page2',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View
                        style={{alignContent:'center'}}
                    >
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page3',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page4',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page5',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page6',
        component:(id:string,index?:number,currentIndex?:number)=>{
            return(
                <Fragment>
                    <View
                        style={{width:'75%',justifyContent:'center',alignItems:'center'}}
                    >
                        {currentIndex === index &&
                            <AudioPlayer
                                audioData={PaginationStaticData.find((val)=>val.id === id)?.auido}
                            />
                        }
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page7',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page8',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page9',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page10',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                    <View
                        style={PaginationDataStyle.PaginationDataImageContainer}
                    >
                        <Image
                            style={PaginationDataStyle.PaginationDataImage}
                            source={PaginationStaticData.find((val)=>val.id === id)?.gif}
                            resizeMode="contain"
                        />
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page11',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                </Fragment>
            )
        }
    },
    {
        id:'page12',
        component:(id:string)=>{
            return(
                <Fragment>
                    <View>
                        <Text
                            style={PaginationDataStyle.PaginationDataText}
                        >
                            {PaginationStaticData.find((val)=>val.id === id)?.text}
                        </Text>
                    </View>
                </Fragment>
            )
        }
    }
]


export const PaginationStaticData = [
    {
        id:'page1',
        text:`${
            ''}I gently sing to you a lullaby​ of love that had been passed through the generations. ${
            ''}Its melody eternally resounds like the sound of the restless waves.${
        ''}`,
        gif:PaginationDataAssets.sweetLook
    },
    {
        id:'page2',
        text:`${
            ''}Being intertwined in two layers, continuing eternally like a spiral. ${
            ''}Both of our fates are tied together. ${
            ''}I was born in this world so that I can meet you one one day. ${
        ``}`
    },
    {
        id:'page3',
        text:`${
            ''}You are a dreamer, always being somewhere far off. ${
            ''}Searching for the traces of the things you long for. ${
        ''}`,
        gif:PaginationDataAssets.slipStairs
    },
    {
        id:'page4',
        text:`${
            ''}This marvelous world is like a kaleidoscope. ${
            ''}It changes its form over and over again ${
            ''}having me wonder whether it is a dream or reality.${
        ''}`,
        gif:PaginationDataAssets.shyMe
    },
    {
        id:'page5',
        text:`${
            ''}Passing over a sad song of love. ${
            ''}I sing it along with the suspended music. ${
            ''}It is like the stars that are always visible in the night sky ${
            ''}with their light shining for eternity.${
        ''}`,
        gif:PaginationDataAssets.yatohappy
    },
    {
        id:'page6',
        auido:PaginationDataAssets.sauraSong
    },
    {
        id:'page7',
        text:`${
            ''}Our bond is intertwined in multiple layers, continuing eternally. ${
            ''}As I make a wish to meet you one day, ${
            ''}I softly close my eyes and pray for this dream.${
        ''}`,
        gif:PaginationDataAssets.smile
    },
    {
        id:'page8',
        text:`${
            ''}You are a traveler, undoubtedly somewhere far off. ${
            ''}Searching for a lost dream.${
        ''}`,
        gif:PaginationDataAssets.sadOnSwing
    },
    {
        id:'page9',
        text:`${
            ''}This marvelous world is like a mirage​. ${
            ''}Is this dimly visible thing a light or a shadow? ${
            ''}And is it a dream or reality?${
        ''}`,
        gif:PaginationDataAssets.happyInside
    },
    {
        id:'page10',
        text:`${
            ''}Falsehood is conceived and truth is born ${
            ''}and before you know it your wavering heart starts to disappear.${
        ''}`,
        gif:PaginationDataAssets.yatoMad
    },
    {
        id:'page11',
        text:`${
            ''}You are a dreamer, always being somewhere far off. ${
            ''}Searching for the traces of the things you long for.${
        ''}`,
    },
    {
        id:'page12',
        text:`${
            ''}This marvelous world is like a kaleidoscope. ${
            ''}It changes its form over and over again ${
            ''}having me wonder whether it is a dream or reality${
        ''}`,
    }
]
