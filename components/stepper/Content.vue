<template >
    <div :ref="(el) => itemContent = el" class="content" :class="step === currentStep ? 'block' : 'hidden'">
        STEP: {{step}}
        Current: {{currentStep}}
        <slot></slot>
    </div>
   
</template>
<script setup lang="ts">
const { currentStep, items } = useStep(1, false)

const step = ref(0)

const itemContent = ref(null)



onMounted(() =>{
      if(items.value){
        const itemsLen = items.value.children.length
        for(let i = 0; i < itemsLen; i++ ){
            const item = items.value.children[i]
            if(item === itemContent.value){
                step.value = i +1
            }
        }
      }
})

</script>
<style lang="css">
    .content{
        width: 100%;
    }
</style>