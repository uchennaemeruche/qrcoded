
<template>
        <div class="text-xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
            <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-blue-900">
                    Create {{qrType}} Qrcode
                </h1>
                <Stepper v-slot="{currentStep, nextStep, previousStep}">
                        <section>
                            <StepperHeader>
                                <StepperStep>
                                    <div class="text-teal-600 text-sm">Website Information</div>
                                </StepperStep>
                                <StepperDivider />
                                <StepperStep>
                                    <div class="text-sm text-teal-600">Configuration</div>
                                </StepperStep>
                            </StepperHeader>
                            <StepperItems>
                                <StepperContent>
                                    <form class="space-y-4 md:space-y-6 mt-16">
                                        <div>
                                            <label for="website"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">
                                                Submit Website URL to create your QrCode</label>
                                            <input type="text" name="url" id="website" v-model="state.url"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-100 dark:placeholder-gray-400 dark:text-blue-900 dark:focus:ring-blue-100 dark:focus:border-blue-500"
                                                placeholder="www.mywebsite.com" required="true" />
                                        </div>

                                        <button @click.prevent="$emit('update', state.url); nextStep(currentStep)"
                                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Next
                                        </button>
                                    </form>
                                </StepperContent>
                                <StepperContent>
                                    <div class="space-y-4 md:space-y-6 mt-16">
                                        <form class="space-y-4 md:space-y-6 mt-18">
                                            <DashboardQrcodeSize />
                                            <DashboardQrCodeColor />
                                            <DashboardQrCodeFileUpload/>
                                            <button @click=" previousStep(currentStep)"
                                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                Previous
                                            </button>
                                            <button @click="createQrCode(state.url)"
                                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                Create Code
                                            </button>
                                        </form>
                                    </div>
                                </StepperContent>
                            </StepperItems>
                        </section>

                </Stepper>
            </div>
        </div>
    </template>
<script setup>

const props = defineProps({
    qrType: {type: String, required: true }
})

const emit = defineEmits(['update', 'create'])

const {qrType} = toRefs(props)
const state = reactive({
    url: '',

})

const emitNext = () =>{
    console.log("HEllo There")
    // emit('update', state.url)
    // next(currentStep)
    
}
</script>