<template>
    <div :ref="(el) => itemContent = el" class="content w-full" :class="step === currentStep ? 'block' : 'hidden'">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
const { currentStep, items, activeDivider} = useStep(1, false)

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