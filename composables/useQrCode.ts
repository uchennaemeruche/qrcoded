
const useQrCode = () =>{

    const backgroundColor = useState<String>('#FFFFFF')
    const setBackgroundColor = (value) =>{
        backgroundColor.value = value
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

    const url = ref('')

    const size =  ref(100)

    

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
        size
    }
}

export default useQrCode