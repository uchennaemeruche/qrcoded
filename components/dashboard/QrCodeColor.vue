<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <!-- <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-gray-200 mb-3">Select QrCode Size</h5> -->
            <span>Customize QRCode Colors?</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </DisclosureButton>
        <DisclosurePanel class="px-4 text-sm text-gray-500">
        <div
            class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        BG: {{background.color}}
                        <h6 class="text-xl font-normal leading-none text-gray-900 dark:text-white mb-2">{{isGradient ? 'Gradient' : 'Single' }} Background color</h6>
                        <div class="w-full" v-show="!transparentBackground">
                            <div class="w-full" v-if="!isGradient">
                                <DashboardColorInput v-model="backgroundColor" @input="(value) => setBackgroundColor(value)"/>
                            </div>
                            <div class="w-full" v-else>
                                {{background.gradient.type}}
                                Gra:{{background.gradient.colorStops[0].color}}
                                <DashboardColorRadioButton v-model="background.gradient.type" :options="['linear', 'radial']" @input="(value) => updateGradientType(value)"/>
                                <div class="w-full flex mx-2 space-x-2">
                                    <DashboardColorInput v-model="background.gradient.colorStops[0].color" @input="(value) => updateColorStops({offset: 0, color: value})"/>
                                    <DashboardColorInput v-model="background.gradient.colorStops[1].color" @input="(value) => updateColorStops({offset: 1, color: value})"/>
                                </div>
                            </div>
                            <DashboardColorSwitcher title="Gradient Background" :item="isGradient" @input="(value) => isGradient = value" />
                        </div>
                       
                        <DashboardColorSwitcher title="Transparent Background" :item="transparentBackground" @input="(value) => transparentBackground = value"/>
                        
                    </li>
                    <li class="py-3 sm:py-4">
                        <h6 class="text-xl font-normal leading-none text-gray-900 dark:text-white mb-2">Dots color</h6>
                        <div class="flex items-center space-x-4 h-[35px] w-full" v-show="!isGradientDots">
                            <div class="w-4/5 h-full">
                                <input class="color-holder" v-model="dotsColor">
                            </div>
                            <div class="h-full w-1/5">
                                <input type="color" class="h-full w-full" v-model="dotsColor" @change="setDotsColor(dotsColor)"
                                style="border: 0.1rem solid rgb(227, 236, 242); background: rgb(255, 255, 255);">
                            </div>
                        </div>
                        <a class="inline-flex space-x-4 justify-center items-center py-2 text-gray-500 rounded cursor-pointer ">
                            <Switch v-model="isGradientDots" :class="isGradientDots ? 'bg-blue-600' : 'bg-gray-300'"
                                class="relative inline-flex h-5 w-11 items-center rounded-full">
                                <span class="sr-only">Gradient dots</span>
                                <span :class="isGradientDots ? 'translate-x-6' : 'translate-x-1'"
                                    class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                            </Switch>
                            <h6 class="text-lg font-normal text-gray-900 dark:text-gray-300">Gradient</h6>
                         </a>
                    </li>
                    <li class="py-3 sm:py-4">
                        <h6 class="text-xl font-normal leading-none text-gray-900 dark:text-white mb-2">Marker border color</h6>
                        <div class="flex items-center space-x-4 h-[35px] w-full">
                            <div class="w-4/5 h-full">
                                <input class="color-holder" v-model="markerBorderColor">
                            </div>
                            <div class="h-full w-1/5">
                                <input type="color" class="h-full w-full" v-model="markerBorderColor"
                                style="border: 0.1rem solid rgb(227, 236, 242); background: rgb(255, 255, 255);">
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <h6 class="text-xl font-normal leading-none text-gray-900 dark:text-white mb-2">Marker center color</h6>
                        <div class="flex items-center space-x-4 h-[35px] w-full">
                            <div class="w-4/5 h-full">
                                <input class="color-holder" v-model="markerCenterColor">
                            </div>
                            <div class="h-full w-1/5">
                                <input type="color" class="h-full w-full" v-model="markerCenterColor"
                                style="border: 0.1rem solid rgb(227, 236, 242); background: rgb(255, 255, 255);">
                            </div>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </div>

    </DisclosurePanel>
    </Disclosure>

</template>
<script setup>
import { Switch, Disclosure, DisclosureButton, DisclosurePanel  } from '@headlessui/vue'

const { setBackgroundColor, background, updateColorStops, updateGradientType, setDotsColor, setMarkerBorderColor, backgroundColor, dotsColor, isGradientDots, markerBorderColor, markerCenterColor} = useQrCode()


const bgColorType = ref('')
const item = ref(false)
const transparentBackground = ref(false)
const isGradient = ref(false)


const updateBgColorType = (value) =>{
    item.value = value
}


</script>
<style lang="css">
.color-card {
    border: 0.1rem solid rgb(227, 236, 242) !important;
    position: relative;
    transition: all 0.2s ease 0s;
    box-shadow: rgba(42, 53, 79, 0.05) 0px 1.5rem 4rem !important;
}


.color-holder{
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 30px; border-radius: unset; display: inline-block;
    @apply h-full w-full p-2.5 bg-gray-200 text-lg font-normal text-gray-600 
}

/* .card-body{
        flex: 1 1 auto;
        padding: 1.5rem;
    } */
</style>