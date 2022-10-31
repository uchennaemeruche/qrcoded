<template>
    <div :ref="(el) => itemContent = el"
        @click="goToStep(step)" 
        class="step-item step-header"
        :class="{'active': currentStep === step, 'complete': (step < currentStep || completed)}">
        <div class="step-group">
            <div class="step">
            <svg v-if="((step) < currentStep || completed)" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <slot v-else name="step-icon"><span>{{step}}</span></slot>
           
        </div>
        <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const { headers, completed, currentStep, setCurrentStep, setCompleted } = useStep(1, false)


const itemContent = ref(null)

const step = ref(0)

const goToStep = (step) =>{
    setCompleted(false)
    setCurrentStep(step)
}

onMounted(() => {
    if (headers.value) {
        const itemsLen = headers.value.children.length
        for (let i = 0; i < itemsLen; i++) {
            const item = headers.value.children[i]
            if (item === itemContent.value) {
                step.value = i + 1
            }
        }
    }
})
</script>

<style lang="css">

</style>