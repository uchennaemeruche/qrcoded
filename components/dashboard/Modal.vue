<template>
    <TransitionRoot :show="isOpen" as="template" enter="duration-300 ease-out" enter-from="opacity-0"
        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <Dialog as="div" @close="closeModal" class="relative z-10 w-[800px]">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Stepper v-slot="{currentStep, completed, nextStep, previousStep}">
                                <DialogTitle as="div"
                                    class="text-xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
                                    Create New vCard
                                    <div class="p-4">
                                        <StepperHeader>
                                            <StepperStep>
                                                <div class="text-teal-600 text-sm">
                                                    {{steps[0].text}}
                                                </div>
                                                <template #step-icon>
                                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z">
                                                        </path>
                                                    </svg>
                                                </template>
                                            </StepperStep>
                                            <StepperDivider />
                                            <StepperStep>
                                                <div class="text-sm text-teal-600">
                                                    {{steps[1].text}}
                                                </div>
                                                <template #step-icon>
                                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path
                                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                        </path>
                                                        <polyline points="22,6 12,13 2,6"></polyline>
                                                    </svg>
                                                </template>
                                            </StepperStep>
                                            <StepperDivider />
                                            <StepperStep>
                                                <div class="text-sm text-teal-600">
                                                    {{steps[2].text}}
                                                </div>
                                                <template #step-icon>
                                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                                    </svg>
                                                </template>
                                            </StepperStep>
                                        </StepperHeader>
                                    </div>
                                </DialogTitle>
                                <!-- <hr class="mt-2" /> -->

                                <div class="h-[500px] overflow-y-auto ">
                                <StepperItems>
                                    <StepperContent>
                                        <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
                                            <h1
                                                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Personal Details
                                            </h1>
                                            <form class="space-y-4 md:space-y-6" action="#">
                                                <div>
                                                    <label for="fullname"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                        Name</label>
                                                    <input type="text" name="fullname" id="fullname"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="John Doe" required="">
                                                </div>

                                                <div>
                                                    <label for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                        email</label>
                                                    <input type="email" name="email" id="email"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="johndoe@company.com" required="">
                                                </div>
                                                <div>
                                                    <label for="phone"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                                    <input type="tel" name="phone" id="phone"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="+2348 621 3932" required="">
                                                </div>
                                                <div>
                                                    <label for="company"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                        Company Name/Business Name</label>
                                                    <input type="text" name="company" id="company"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="xyz Ltd." required="">
                                                </div>
                                                <div>
                                                    <label for="job"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                        Job/Role/Position</label>
                                                    <input type="text" name="job" id="job"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Managing Director" required="">
                                                </div>
                                                <div>
                                                    <label for="website"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                        Website</label>
                                                    <input type="text" name="website" id="website"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="https://www.xyz.com" required="">
                                                </div>
                                                <button @click="nextStep(currentStep)"
                                                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                    Next</button>
                                            </form>
                                        </div>
                                    </StepperContent>
                                    <StepperContent>
                                        <div class="w-full h-full w-full p-6 space-y-4 md:space-y-6 sm:p-8">
                                            <h1
                                                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Address
                                            </h1>
                                            <div>
                                                <label for="street"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Street</label>
                                                <input type="text" name="street" id="street"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="No 32 St" required="">
                                            </div>
                                            <div>
                                                <label for="city"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    City</label>
                                                <input type="text" name="city" id="city"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Yen" required="">
                                            </div>
                                            <div>
                                                <label for="state"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    State</label>
                                                <input type="text" name="state" id="state"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="BY" required="">
                                            </div>
                                            <div>
                                                <label for="zip"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Zip Code</label>
                                                <input type="text" name="zip" id="zip"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="53532124" required="">
                                            </div>
                                            <div>
                                                <label for="country"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Country</label>
                                                <input type="text" name="country" id="country"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Nigeria" required="">
                                            </div>

                                        </div>
                                    </StepperContent>
                                    <StepperContent>
                                        <div class="w-full h-full w-full p-6 space-y-4 md:space-y-6 sm:p-8">
                                            <h1
                                                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Third Content Here
                                            </h1>
                                        </div>
                                    </StepperContent>
                                </StepperItems>
                                </div>
                                <div class="flex justify-between mt-4">
                                     <button type="button" v-show="currentStep > 1"
                                         class="inline-flex w-full mx-2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                         @click="previousStep(currentStep)">
                                         Previous
                                     </button>
                                     <button type="button" v-show="!completed"
                                         class="inline-flex w-full mx-2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                         @click="nextStep(currentStep)">
                                         Next
                                     </button>
                                </div>
                            </Stepper>
                           
                            
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script setup>
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const steps = [
    {
        text: "Personal Details",
    },
    {
        text: "NewMsg",
    },
    {
        "text": "Confirm",
    }
]

// const {completed, currentStep } = useStep(1, false)

const isOpen = useState('isOpen')

function closeModal() {
    isOpen.value = false
};

const props = defineProps({
    title: { type: String, required: false },
});
</script>