<template>
        <div class="flex justify-between">
            <div v-for="(step, i) in headers" :key="i" 
                class="step-item"
                :class="{'active': currentStep === i+1, 'complete': (i+1 < currentStep || completed)}"
            >
            <StepperStep :completed="false" :current-step="1" :index="i" :step="step"/>
        </div>
        </div>
</template>
<script setup>
const props = defineProps({
    headers: [String]
})



const { currentStep, setCurrentStep, completed, setCompleted } = useStep(1, false)

    // const props = defineProps({
    //   show: Boolean,
    // //   completed: Boolean,
    // //   step: Object,
    // //   currentStep: Number,
    // //   index: Number

    // })

    // const {step, index} = toRefs(props) 

    // const {show} = toRefs(props)
    // const isShowing = ref(true)

    // watch(show, () =>{
    //     isShowing.value = false

    //     setTimeout(() =>{
    //         isShowing.value = true
    //     })
    // })
    

</script>
<style lang="css">
</style>