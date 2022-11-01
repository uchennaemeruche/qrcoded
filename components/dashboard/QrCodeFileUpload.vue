<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
            <!-- <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-gray-200 mb-3">Select QrCode Size</h5> -->
            <span>Upload QRCode Logo?</span>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </DisclosureButton>
        <DisclosurePanel class="px-4 text-sm text-gray-500">
        <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Upload Custom Qrcode Logo</h5>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    class="w-6 h-6 fill-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="relative flow-root">
                <div v-if="files.length < 1" class="flex justify-center items-center w-full drop-area" :data-active="dropZoneActive" 
                    @dragenter="setDropzoneActive" @dragleave="setDropZoneInactive"
                   @dragover.prevent="onUploadDragoverEvent" @drop.prevent="onUploadDropEvent">
                    <div class="absolute rounded-full bg-gray-100 h-20 w-20 z-10 transition-opacity duration-500 ease-in-out"
                        v-bind:class="{
                            'opacity-100': uploadDragoverTracking,
                            'opacity-0': !uploadDragoverTracking
                        }" v-bind:style="{
                            left: `calc(${pageX}px - 2.5rem)`,
                            top: `calc(${pageY}px - 2.5rem)`
                        }">

                    </div>
                    <label for="drag-drop-input"
                        class="relative flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
                        <input :id="id" type="file" :multiple="multiple" :accept="acceptedFileTypes" class="hidden" @change.prevent="handleFileChange">
                    </label>
                </div>
                

                <div v-else class="overflow-hidden sm:rounded-md w-full h-64" >
                    <DashboardFilePreview v-for="file of files" :key="file.id" :file="file" tag="div" @remove="removeFile" />
                </div>

               
            </div>
        </div>

    </DisclosurePanel>
    </Disclosure>

</template>
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel  } from '@headlessui/vue'
const { files, addFiles, removeFile}  = useFileList()


const props = defineProps({
    id: {type: String, default: 'drag-drop-input'},
    multiple: {type: Boolean, default: false},
    color: {type: String, default: '' },
    acceptedFileTypes: {type: String, default: "*"}
})

const {id, multiple, acceptedFileTypes} = toRefs(props)

const dropZoneActive = ref(false)
let inActiveTimeout = null
// const files = ref([])
const pageX = ref(0)
const pageY = ref(0)
const uploadDragoverTracking = ref(false)
const uploadDragoverEvent = ref(false)

const setDropzoneActive  = () =>{
    dropZoneActive.value = true
    clearTimeout(inActiveTimeout)
}

const setDropZoneInactive = () =>{
    inActiveTimeout = setTimeout(() => {
        dropZoneActive.value = false
    }, 50)
}

const onUploadDragoverEvent =(e) => {
    setDropZoneInactive()
    uploadDragoverEvent.value = true;
    uploadDragoverTracking.value = true;
    pageX.value = e.pageX;
    pageY.value = e.pageY;
}
const onUploadDropEvent = (e) => {
    setDropZoneInactive()
    uploadDragoverEvent.value = false;
    uploadDragoverTracking.value = false;
    pageX.value = 0;
    pageY.value = 0;
    droppedFiles(e)
}
const droppedFiles = (e) => {
    let droppedFiles = e.dataTransfer.files;

    if (!droppedFiles) return;
    addFiles(droppedFiles);
    // ([...droppedFiles]).forEach(f => {
    //     files.value.push(f)
    // });
}
const  droppedFileValidator = (file) => {
    return false;
}
// const removeFile = (file) => {
//     files.value = files.value.filter(f => {
//         return f != file;
//     });
// }

const handleFileChange = (e) =>{
    console.log(e.target.files)
    // files.value = Array.from(e.target.files) || []
    addFiles(e.target.files)
    e.target.value = null
}
const uploadFiles =() => {
    alert("HElo")
    console.log(files.value);
    // This is where the magic could happen!
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop']

const preventDefaults = (e) => {
    e.preventDefault()
}

onMounted(() =>{
    events.forEach(event =>{
        document.body.addEventListener(event, preventDefaults)
    })
})

onUnmounted(() =>{
    events.forEach(event =>{
        document.body.removeEventListener(event, preventDefaults)
    })
})

</script>
<style lang="css">
.drop-area[data-active=true] {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background: #ffffffcc;
}
</style>