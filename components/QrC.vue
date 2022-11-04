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

  watch(options, (newValue, oldValue) => {
    console.log("someData changed!");
    console.log("NEW !", newValue);
    console.log("OLD !", oldValue);
  },
  {
    deep: true,
  }
);


const qrcanvas = ref(null)

  // watch: {
  //   $props: {
  //     deep: true,
  //     immediate: true,
  //     handler() {
  //       this.qrcode.update(this.props)
  //     }
  //   }
  // },

  onMounted(() =>{
    generate().append(qrcanvas.value)
  })


  const generate = () =>{
      if (process.client) {
      
        const qr = new QRCodeStyling(options.value)
        console.log("Hi Thre", qr)
        return qr
      }
    }

   const  download = () => {
      // this.qrCode.download({ extension: this.extension })
      this.generate().download({extension: 'svg'})
    }
  

</script>