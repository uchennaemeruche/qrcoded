<template>
<div :id="id" :ref="((el) => qrcanvas = el )"></div>
</template>

<script setup>
import QRCodeStyling from 'qr-code-styling'
const {background } = useQrCode() 


const props = defineProps ({
    id:{type: String, required: true},
    data: { type: String, default: 'uchennaemeruche.com' },
    options: { type: Object, default: {} },
    tag: {type: String, default: ''}
  })

  
  const {data, options, id } = toRefs(props)
  
  console.log("Options",options.value)
  console.log("BG:", background.value)

  const qrcode = ref(QRCodeStyling)



watch(() => options.value, (newValue, oldValue) => {
    console.log("OPTIONS OLD:", oldValue)
    console.log("OPTIONS NEW:", newValue)
    qrcode.value.update(options.value)
  },
  {
    deep: true,
  }
);

watchEffect(() =>{

})


const qrcanvas = ref(null)

  onMounted(() =>{
    qrcode.value = generate()
    qrcode.value.append(qrcanvas.value)
  })


  const generate = () =>{
      if (process.client) {
       return new QRCodeStyling(options.value)
      }
    }

   const  download = () => {
      // this.qrCode.download({ extension: this.extension })
      this.generate().download({extension: 'svg'})
    }
  

</script>