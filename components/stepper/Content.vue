<template >
    <div class="bg-white">
        <div class="flex w-full mt-8">
            <div class="w-full">Hello 1</div>
        </div>
        <div class="flex justify-between">
            <button v-show="currentStep > 1" class="btn" @click="handleStep(currentStep - 1,false )">
                Previous
            </button>
            <button v-show="!completed" class="btn" @click="handleStep(currentStep + 1, true)">
                {{currentStep === stepLength ? 'Finish' : 'Next'}}
            </button>
        </div>
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