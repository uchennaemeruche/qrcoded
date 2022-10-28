<template>
    <div class="w-[800px]">
        <StepperHeader>
            <template v-for="(header, i) in stepHeaders" :key="i">
                <StepperStep>
                    <p class="text-gray-500">{{header}}</p>
                    <template #step-icon></template>
                </StepperStep>
            </template>
        </StepperHeader>
        <StepperItems>
            <StepperContent>
                <div class="flex w-full mt-8">
                    <div class="w-full">Hello 1</div>
                </div>
                <div class="flex justify-between">
                    <button v-show="currentStep > 1" class="btn" @click="handleStep(currentStep - 1,false )">
                        Previous
                    </button>
                    <button v-show="!completed" class="btn" @click="handleStep(currentStep + 1, true)">
                        {{currentStep === steps ? 'Finish' : 'Next'}}
                    </button>
                </div>
            </StepperContent>
            <StepperContent>
                <div class="flex w-full mt-8">
                    <div class="w-full">Hello 2</div>
                </div>
                <div class="flex justify-between">
                    <button v-show="currentStep > 1" class="btn" @click="handleStep(currentStep - 1,false )">
                        Previous
                    </button>
                    <button v-show="!completed" class="btn" @click="handleStep(currentStep + 1, true)">
                        {{currentStep === steps ? 'Finish' : 'Next'}}
                    </button>
                </div>
            </StepperContent>
            <StepperContent>
                <div class="flex w-full mt-8">
                    <div class="w-full">Hello 3</div>
                </div>
                <div class="flex justify-between">
                    <button v-show="currentStep > 1" class="btn" @click="handleStep(currentStep - 1,false )">
                        Previous
                    </button>
                    <button v-show="!completed" class="btn" @click="handleStep(currentStep + 1, true)">
                        {{currentStep === steps ? 'Finish' : 'Next'}}
                    </button>
                </div>
            </StepperContent>
        </StepperItems>
    </div>
</template>
<script setup lang="ts">




const stepHeaders = ['Personal Details', 'Address', 'Setup Config']
const { currentStep, setCurrentStep, completed, setCompleted, headers } = useStep(1, false)
const steps = ref(0)


const handleStep = (step: number, isIncrement: boolean) => {
    if (!isIncrement) {
        setCompleted(false)
        setCurrentStep(step)
    } else {
        currentStep.value === steps.value
            ? setCompleted(true)
            : setCurrentStep(step)
    }
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