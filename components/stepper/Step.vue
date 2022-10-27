<template lang="">
    <div class="step-item step-header" :class="{'active': currentStep === index+1, 'complete': (i+1 < currentStep || completed)}">
        <div class="step">
            <svg v-if="((index+1) < currentStep || completed)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span v-else>{{index+1}}</span>
        </div>
        <p class="text-gray-500">{{step}}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    completed: Boolean,
    step: Object,
    currentStep: Number,
    index: Number

})

const { completed, step, currentStep, index } = toRefs(props) 
</script>

<style lang="css">

</style>