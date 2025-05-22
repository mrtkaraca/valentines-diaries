import { Slot, Stack } from "expo-router";
import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout(){
    
    return (
        <Fragment>
            <StatusBar style={'auto'} />
            <Stack
                initialRouteName='home'
                screenOptions={{
                    headerShown:false,
                }}
            >
                <Stack.Screen
                    name='home'
                    options={{
                        animation:'none'
                    }}
                />
                <Stack.Screen
                    name='pagination'
                    options={{
                        animation:'slide_from_right'
                    }}
                />
                <Stack.Screen
                    name='final'
                    options={{
                        animation:'slide_from_right'
                    }}
                />
            </Stack>
        </Fragment>
    );
}
