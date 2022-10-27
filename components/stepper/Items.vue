<template lang="">
    <div>
        <StepperContent :step-length="stepLength"/>
    </div>
</template>
<script setup>
const props = defineProps({
    stepLength: Number
})
const {stepLength} = toRefs(props)
</script>
<style lang="">
    
</style>