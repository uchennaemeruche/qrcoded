<template>
    <div>
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
    steps.value =  headers.value.length

})


</script>
<style lang="css">
.step-item {
    @apply relative flex flex-col items-start justify-center cursor-pointer 
}
.step-group{
    @apply flex flex-col items-center 
}
.divider{
    @apply flex-auto w-auto mt-4 h-1 transition duration-500 ease-in-out bg-slate-200
}

.header .step-item + .divider:last-of-type{
    @apply hidden
}

.step {
    @apply w-10 h-10 flex items-center justify-center relative bg-slate-700 rounded-full font-semibold text-white
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

.complete.divider{
    @apply bg-green-600
}

</style>