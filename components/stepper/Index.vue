<template>
    <div class="w-[800px]">
        <slot 
            :steps="steps" 
            :nextStep="nextStep" 
            :previousStep="previousStep"
            :currentStep="currentStep" 
            :completed="completed" 
            :headers="headers"
        />
        
    </div>
</template>
<script setup lang="ts">

const { currentStep, setCurrentStep, completed, setCompleted, headers } = useStep(1, false)
const steps = ref(0)


const nextStep = (step: number) => {
        currentStep.value === steps.value
            ? setCompleted(true)
            : setCurrentStep(step ? step+1 : currentStep.value + 1)
    
}

const previousStep = (step: number) => {
        setCompleted(false)
        setCurrentStep(step ? step-1 : currentStep.value -1)
}

onMounted(() =>{
    steps.value =  headers.value.children.length

})


</script>
<style lang="css">
.step-header {
    @apply relative flex flex-col justify-center items-center w-full cursor-pointer;
}

.step-item {
    @apply relative flex flex-col justify-center items-center w-full cursor-pointer;
}

.step-item:not(:first-child):before {
    @apply content-[''] bg-slate-200 absolute w-full h-[3px] right-1/2 top-1/3 -translate-y-2/4;
}

.step {
    @apply w-10 h-10 flex items-center justify-center z-10 relative bg-slate-700 rounded-full font-semibold text-white
}

.btn {
    @apply bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-7 py-1 flex mx-auto mt-4 rounded-md;
}

.active .step {
    @apply bg-sky-600
}

.complete .step {
    @apply bg-green-600
}

.complete p {
    @apply text-white
}

.complete:not(:first-child):before,
.active:not(:first-child):before {
    @apply bg-green-600
}
</style>