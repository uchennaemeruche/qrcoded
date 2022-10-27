<template>
     <div class="bg-gray-900 h-screen p-10">
        <StepperHeader :headers="stepHeaders">
            <StepperStep :completed="completed" :current-step="currentStep" :index="0" step="Project N" />
            <StepperStep :completed="completed" :current-step="currentStep" :index="1" step="Second Step" />
            <StepperStep :completed="completed" :current-step="currentStep" :index="2" step="Final Step" />
        </StepperHeader>
       <StepperItems :step-length="stepHeaders.length">
        <StepperContent :step-length="stepHeaders.length">
            <div class="flex w-full mt-8">
                <div class="w-full">Hello 1</div>
            </div>
            <div class="flex justify-between">
                <button v-show="currentStep > 1" class="btn" @click="handleStep(currentStep - 1,false )">
                    Previous
                </button>
                <button v-show="!completed" class="btn" @click="handleStep(currentStep + 1, true)">
                    {{currentStep === stepHeaders.length ? 'Finish' : 'Next'}}
                </button>
            </div>
        </StepperContent>
    </StepperItems>
     </div>
</template>
<script setup>
const stepHeaders = ['Personal Details', 'Address', 'Setup Config']
const { currentStep, setCurrentStep, completed, setCompleted } = useStep(1, false)

</script>
<style lang="css">
.step-header{
    @apply relative flex flex-col justify-center items-center w-36 cursor-pointer;
}
.step-item {
    @apply relative flex flex-col justify-center items-center w-36 cursor-pointer;
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