import { CornerDotType, CornerSquareType, DotType, DotTypes, dotTypes, Gradient } from 'qr-code-styling'
type ColorStops ={
    offset: Number,
    color: String
}

// type Gradient ={
//     type: 'Radial' | 'Linear',
//     rotation: Number,
//     colorStops: ColorStops[]
// }

interface ColorConfig{
    color: String,
    gradient?: Gradient
}


interface BG  {
    // isTransparent: Boolean
    colorType: 'Single' | 'Gradient'
    color: String;
    gradient?: Gradient
}


interface CornerOptions extends ColorConfig{
    type: CornerSquareType | DotType | CornerDotType,
}

const corner: CornerOptions = {
    type: 'dot',
    color: '',
    gradient:{
        type: 'linear',
        rotation: 1,
        colorStops: [{offset: 0, color:''}]
    }
}



const bg:ColorConfig ={
    // isTransparent: false,
    // colorType: 'Single',
    color: '',
    gradient:{
        type: 'linear',
        rotation:0,
        colorStops:[{offset: 0, color:''}, {offset:1, color:''}]
    }
}

const useQrCode = () =>{

    const background = ref<ColorConfig>({
        color: '#FFFFFF',
        gradient:{
            type: 'linear',
            colorStops:[{offset: 0, color:''}, {offset:1, color:''}]
        }
    })

    const backgroundColor = useState<String>('#FFFFFF')
    const setBackgroundColor = (value) =>{
        backgroundColor.value = value
    }

    const updateColorStops = (newValue) =>{
        background.value.gradient.colorStops[newValue.offset].offset  = newValue.offset
        background.value.gradient.colorStops[newValue.offset].color  = newValue.color
    }

    const updateGradientType = (newValue) =>{
        background.value.gradient.type = newValue
    }

    const updateBackground = (newValue) =>{
        console.log("VALUE", newValue)
        background.value = {
            ...newValue
        }
    }
    const transparentBackground = ref(false)
    
    const dotsColor = ref('#000000')
    const setDotsColor = (value) =>{
        dotsColor.value = value
    }
    const isGradientDots = ref(false)
    
    const markerBorderColor = ref('#000000')
    const setMarkerBorderColor = (value) =>{
        markerBorderColor.value = value
    }

    
    const markerCenterColor = ref('#000000')
    const setMarkerCenterColor = (value) =>{
        markerCenterColor.value = value
    }

    const url = ref('undefined')

    return {
        backgroundColor,
        transparentBackground,
        dotsColor,
        isGradientDots,
        markerBorderColor,
        markerCenterColor,
        setBackgroundColor,
        setDotsColor,
        setMarkerBorderColor,
        setMarkerCenterColor,
        url,

        background,
        updateGradientType,
        updateBackground,
        updateColorStops
    }
}

export default useQrCode