<template>
    <div class="flex flex-col w-full md:flex-row mx-12 lg:mx-0">
        <div class="column-3 w-full md:w-7/12 h-full mt-4 p-3 border-2 border-dashed md:mx-2 my-2 rounded-md">
            <div class="mx-auto w-full">
                <RadioGroup v-model="selected">
                    <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                    <div class="space-y-2 flex flex-wrap ">
                        <RadioGroupOption as="template" v-for="code in qrcodeTypes" :key="code.type" :value="code"
                            v-slot="{ active, checked }">
                            <div :class="[
                              active
                                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                : '',
                              checked ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white ',
                            ]" class="relative cursor-pointer rounded-lg w-72 h-24 mt-2 mx-auto px-4 py-4 shadow-md focus:outline-none" >
                                <div class="flex w-full items-center justify-between">
                                    <div class="flex items-center space-x-4">
                                        <svg width="29.983px" height="29.983px" :fill="code.color"
                                            :viewBox="code.viewBox"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path :d="code.path" />
                                        </svg>
                                        <div class="flex items-center">
                                            <div class="text-sm">
                                                <RadioGroupLabel as="p"
                                                    :class="checked ? 'text-white' : 'text-gray-900'"
                                                    class="font-medium">
                                                    {{ code.type }}
                                                </RadioGroupLabel>
                                                <RadioGroupDescription as="span"
                                                    :class="checked ? 'text-sky-100' : 'text-gray-500'" class="inline">
                                                    <span>{{ code.description }}</span>
                                                </RadioGroupDescription>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-show="checked" class="shrink-0 text-white">
                                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                                            <path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
        </div>
        <div class="column-2 w-full md:w-4/12 h-full mt-4 p-3 border border-dashed md:mx-2 my-2 rounded-md ">
            Hi there
        </div>
    </div>
</template>
<script setup>
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription
} from '@headlessui/vue'

const qrcodeTypes = [
    {
        type: 'Website',
        description: 'Open a URL',
        path: '160 GB SSD disk',
    },
    {
        type: 'vCard',
        description: 'Share Contact Details',
        path: 'M19 3H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-6 4h4v1h-4V7zm-2 7.803a2.31 2.31 0 0 0-.529-.303c-1.18-.508-2.961-1.26-2.961-2.176 0-.551.359-.371.518-1.379.066-.418.385-.007.445-.961 0-.38-.174-.475-.174-.475s.088-.562.123-.996c.036-.453-.221-1.8-1.277-2.097-.186-.188-.311-.111.258-.412-1.244-.059-1.534.592-2.196 1.071-.564.42-.717 1.085-.689 1.439.037.433.125.996.125.996s-.175.094-.175.474c.061.954.38.543.445.961.158 1.008.519.828.519 1.379 0 .916-1.781 1.668-2.961 2.176a2.503 2.503 0 0 0-.471.26V5h9v9.803zM18 11h-5v-1h5v1z',
        color:'',
        viewBox: '0 0 20 20'
    },
    {
        type: 'Video',
        description: 'Share Video Link and Download',
        path: 'M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z',
        color: '#212121',
        viewBox: '0 0 28 28'
    },
    {
        type: 'PDF',
        description: 'Share documents in any format',
        path: "M51.383,50.713H21.667v-2.336h29.714v2.336H51.383z M51.104,56.553H21.388v2.336h29.716V56.553z M51.101,17.236H35.57 v2.336h15.531V17.236z M51.101,24.975H35.57v2.335h15.531V24.975z M51.101,32.706H21.942v2.336h29.16v-2.336H51.101z  M51.101,40.448H21.942v2.336h29.16v-2.336H51.101z M25.175,2.245l-6.836,4.94h3.208h38.677v55.49v3.864v0.784v0.78v1.88H13.716 V31.375h3.649v31.163h38.758V11.88H17.367v2.614h-3.648v-7.31L23.666,0h41.659L63.19,2.245H25.175z M38.025,64.436h-3.505v3.504 h3.505V64.436z M4.658,28.059h1.075h1.065v-3.647c0.604-0.016,1.32-0.021,2.146-0.016c1.168,0,2.055-0.288,2.666-0.86 c0.607-0.569,0.913-1.412,0.913-2.517c0-1.045-0.306-1.843-0.913-2.385c-0.61-0.546-1.498-0.822-2.666-0.822H5.726H4.658V28.059z  M6.797,19.576h1.784c0.601,0,1.049,0.12,1.351,0.365c0.299,0.243,0.448,0.611,0.448,1.099c0,0.535-0.149,0.927-0.448,1.197 c-0.301,0.263-0.75,0.396-1.351,0.396H6.797V19.576z M14.176,28.059h1.067h3.145c1.469,0,2.581-0.457,3.343-1.37 c0.761-0.912,1.139-2.249,1.139-4.005c0-1.596-0.367-2.806-1.101-3.635c-0.729-0.827-1.801-1.238-3.209-1.238h-3.316h-1.067V28.059 L14.176,28.059z M16.315,19.576h1.981c0.815,0,1.422,0.265,1.826,0.8c0.405,0.529,0.608,1.326,0.608,2.389 c0,1.177-0.22,2.058-0.651,2.646c-0.437,0.589-1.087,0.885-1.956,0.885h-1.806L16.315,19.576L16.315,19.576z M25.558,28.059h1.067 v-4.334h4.489v-0.885v-0.88h-4.489v-2.327h5.151V18.72v-0.909h-7.291v10.248H25.558z",
        color: '',
        viewBox: '0 0 69.983 69.983'
    },
    {
        type: 'Images',
        description: 'Image Gallery made easy',
        path: '160 GB SSD disk',
    },
    {
        type: 'Business',
        description: 'Create a business page and share information about your business',
        path: '160 GB SSD disk',
    },
    {
        type: 'Apps',
        description: 'Share link to the new big app you created or you want friends to download',
        path: '160 GB SSD disk',
    },
    {
        type: 'Coupon',
        description: 'Let friends access your coupons easily',
        path: '160 GB SSD disk',
    },
    {
        type: 'Wi-Fi',
        description: 'Share Wi-Fi connection with friends',
        path: '160 GB SSD disk',
    },
    {
        type: 'Menu',
        description: 'Share Wi-Fi connection with friends',
        path: '160 GB SSD disk',
    },
]
const selected = ref(qrcodeTypes[0])

</script>
<style lang="">
    
</style>