export const Fonts = {
    yellowTailRegular:require('@/assets/fonts/Yellowtail-Regular.ttf'),
    spaceMonoRegular:require('@/assets/fonts/SpaceMono-Regular.ttf'),
    parisienneRegular:require('@/assets/fonts/Parisienne-Regular.ttf')
}

export const FontsName = (Object.keys(Fonts) as Array<keyof typeof Fonts>).reduce((pre,curr)=>({
    ...pre,
    [`${curr}`]:`${curr}`
}),{} as Record<keyof typeof Fonts, string>)
