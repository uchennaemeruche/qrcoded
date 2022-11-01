<template>

    <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <!-- <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-gray-200 mb-3">Select QrCode Size</h5> -->
            <span>Select QrCode Size?</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </DisclosureButton>
        <DisclosurePanel class="px-4 text-sm text-gray-500">
        <div class="w-full p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <!-- <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-gray-200 mb-3">Select QrCode Size</h5> -->
                <Listbox v-model="selectedSize">
                    <div class="relative mt-1">
                        <ListboxButton
                            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span class="block truncate">{{ selectedSize.name }}</span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    class="h-5 w-5 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </span>
                        </ListboxButton>

                        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                            <ListboxOptions
                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <ListboxOption v-slot="{ active, selected }" v-for="size in sizes" :key="size.name"
                                    :value="size" as="template">
                                    <li :class="[
                                        active ? 'bg-blue-100 text-blue-900' : 'text-gray-900',
                                        'relative cursor-default select-none py-2 pl-10 pr-4',
                                    ]">
                                        <span :class="[
                                            selected ? 'font-medium' : 'font-normal',
                                            'block truncate',
                                        ]">{{ size.name }}</span>
                                        <span v-if="selected"
                                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5} stroke="currentColor" class="h-5 w-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </span>
                                    </li>
                                </ListboxOption>
                            </ListboxOptions>
                        </transition>
                    </div>
                </Listbox>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const sizes = [
    { name: '100x100', value: '100' },
    { name: '200x200', value: '200' },
    { name: '300x300', value: '300' },
    { name: '400x400', value: '400' },
    { name: '500x500', value: '400' },
    { name: '600x600', value: '400' },
    { name: '700x700', value: '400' },

]
const selectedSize = ref(sizes[0])

</script>
<style lang="">
    
</style>