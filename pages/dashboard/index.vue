
<template>
    <div class="flex flex-row" :class="darkTheme ? 'dark' : ''">
      <!-- <DashboardStepper/> -->
      <Stepper v-slot="{steps, currentStep, completed, nextStep, previousStep }">
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
                    <button v-show="currentStep > 1" class="btn" @click="previousStep(currentStep)">
                        Previous
                    </button>
                    <button v-show="!completed" class="btn" @click="nextStep(currentStep)">
                        {{currentStep === steps ? 'Finish' : 'Next'}}
                    </button>
                </div>
            </StepperContent>
            <StepperContent>
                <div class="flex w-full mt-8">
                    <div class="w-full">Hello 2</div>
                </div>
                <div class="flex justify-between">
                    <button v-show="currentStep > 1" class="btn" @click="previousStep(currentStep)">
                        Previous
                    </button>
                    <button v-show="!completed" class="btn" @click="nextStep(currentStep)">
                        {{currentStep === steps ? 'Finish' : 'Next'}}
                    </button>
                </div>
            </StepperContent>
            <StepperContent>
                <div class="flex w-full mt-8">
                    <div class="w-full">Hello 3</div>
                </div>
                <div class="flex justify-between">
                    <button v-show="currentStep > 1" class="btn" @click="previousStep(currentStep)">
                        Previous
                    </button>
                    <button v-show="!completed" class="btn" @click="nextStep(currentStep)">
                        {{currentStep === steps ? 'Finish' : 'Next'}}
                    </button>
                </div>
            </StepperContent>
        </StepperItems>
      </Stepper>
    </div>
</template>


<script setup lang="ts">
const { darkTheme } = useDarkTheme()
// const enabled = useState<Boolean>('enabled', () => false)
const isSidebarOpen = useState<boolean>('isSidebarOpen', () => {
    if (process.client) {
        if (window.innerWidth >= 950) return true
        return false
    }
})

const hideSidebar = () => {
    if (process.client) {
        if (window.innerWidth <= 950)
            isSidebarOpen.value = false
    }
}



const stepHeaders = ['Personal', 'Initialization', 'Setup Config']
</script>

<style>
#sidedrawar {
    /* width: 400px; */
}
</style>


