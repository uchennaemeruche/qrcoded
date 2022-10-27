<template >
    <div class="bg-white">
       <slot></slot>
    </div>
</template>
<script setup lang="ts">

const props = defineProps({
    stepLength: Number
})
const {stepLength} = toRefs(props)

const { currentStep, setCurrentStep, completed, setCompleted } = useStep(1, false)
const handleStep = (step: number, isIncrement: boolean) => {
    if(!isIncrement){
        setCompleted(false)
        setCurrentStep(step)
    }else{
        currentStep.value === stepLength.value
            ? setCompleted(true)
            : setCurrentStep(step)
    }
}
</script>
<style lang="">
    
</style>