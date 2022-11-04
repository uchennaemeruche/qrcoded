
import Qr, {  QRCodeToDataURLOptions } from 'qrcode'

const useQrCode = () =>{

    const qrcode = ref(null)
    const canvasEl = ref<HTMLCanvasElement | null>(null)
    const canvas = canvasEl.value
    

    const optn: QRCodeToDataURLOptions ={
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        rendererOpts:{
            quality: 0.4,
            
        },
        color: {
            dark:"#010599FF",
            light:"#FFBF60FF"
        }
    }
    

   const createCode = async(text) =>{
       qrcode.value = await Qr.toDataURL(text, optn)
    }



    // const generate = (tag: String, options: QRCodeOptions, value: string, ) =>{
    //     switch (tag) {
    //         case 'canvas':
    //             Qr.toCanvas(canvas, value, options, (err) =>{
    //                 console.log("Canvas error:", err)
    //                 throw err
    //             })
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    return {
        createCode, qrcode
    }
}

export default useQrCode