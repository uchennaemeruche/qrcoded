<template>
     <div :ref="(el) => itemContent = el" class="divider" :class="{'complete': (step <= currentStep -1 || completed)}"></div>
</template>
<script setup>
const { completed, currentStep, dividers} = useStep(1, false)

const itemContent = ref(null)

const step = ref(1)

onMounted(() => {
    if (dividers.value) {
        const itemsLen = dividers.value.length
        for (let i = 0; i < itemsLen; i++) {
            const item = dividers.value[i]
            if (item === itemContent.value) {
                step.value = i + 1
            }
        }
    }
})

</script>
