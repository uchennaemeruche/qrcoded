<template>
    <div class="bg-gray-900 h-screen p-10">
        <div class="flex justify-between">
            <div v-for="(step, i) in steps" :key="i" 
                class="step-item"
                :class="{'active': currentStep === i+1, 'complete': (i+1 < currentStep || completed)}"
                @click="setCurrentStep(i+1)"
            >
                <div class="step">
                    <svg v-if="((i+1) < currentStep || completed)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span v-else>{{i+1}}</span>
                </div>
                <p class="text-gray-500">{{step}}</p>
            </div>
        </div>
        <div class="flex w-full mt-8">
            <div class="w-full">Hello 1</div>
        </div>
       <div class="flex justify-between">
        <button v-show="currentStep > 1" class="btn" @click="handleStep(currentStep - 1,false )">
             Previous
        </button>
        <button v-show="!completed" class="btn" @click="handleStep(currentStep + 1, true)">
            {{currentStep === steps.length ? 'Finish' : 'Next'}}
        </button>
       </div>
    </div>

</template>
<script setup lang="ts">

const steps = ['Personal Details', 'Address', 'Setup Config']

const { currentStep, setCurrentStep, completed, setCompleted } = useStep(1, false)


const handleStep = (step: number, isIncrement: boolean) => {
    if(!isIncrement){
        setCompleted(false)
        setCurrentStep(step)
    }else{
        currentStep.value === steps.length
            ? setCompleted(true)
            : setCurrentStep(step)
    }
}



</script>
<style lang="css">
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