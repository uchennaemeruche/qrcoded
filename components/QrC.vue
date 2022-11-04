<template>
<div :id="id" :ref="((el) => qrcanvas = el )"></div>
</template>

<script setup>
import QRCodeStyling from 'qr-code-styling'


const props = defineProps ({
    id:{type: String, required: true},
    data: { type: String, default: 'uchennaemeruche.com' },
    options: { type: Object, default: {} },
    tag: {type: String, default: ''}
  })

  const {data, options, id } = toRefs(props)

  const qrcode = ref(QRCodeStyling)

  watch(options, (newValue, oldValue) => {
    qrcode.value.update(options.value)
  },
  {
    deep: true,
  }
);


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