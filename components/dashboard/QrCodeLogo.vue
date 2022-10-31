<template>
    <div class="w-full">
        <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Upload Custom Qrcode Logo</h5>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    class="w-6 h-6 fill-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="flow-root">
                <div class="flex justify-center items-center w-full">
                    <label for="dropzone-file"
                        class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                </path>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                    to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden">
                    </label>
                </div>

            </div>
        </div>

    </div>

</template>
<script setup>
import { Switch } from '@headlessui/vue'

const backgroundColor = ref('#FFFFFF')
const transparentBackground = ref(false)

const dotsColor = ref('#000000')
const isGradientDots = ref(false)

const markerBorderColor = ref('#000000')

const markerCenterColor = ref('#000000')


</script>
<style lang="css">
.color-card {
    border: 0.1rem solid rgb(227, 236, 242) !important;
    position: relative;
    transition: all 0.2s ease 0s;
    box-shadow: rgba(42, 53, 79, 0.05) 0px 1.5rem 4rem !important;
}


.color-holder {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 30px;
    border-radius: unset;
    display: inline-block;
    @apply h-full w-full p-2.5 bg-gray-200 text-lg font-normal text-gray-600
}

/* .card-body{
        flex: 1 1 auto;
        padding: 1.5rem;
    } */
</style>