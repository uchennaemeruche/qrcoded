<template lang="">
    <component :is="tag" class="file-preview w-4/5 h-full my-4 mx-2 relative overflow-hidden">
        <div class="flex items-center justify-between mb-3">
            <div class="text-sm leading-5 font-medium text-gray-100 truncate">                  
                {{ file.file.name }} ({{ file.file.size }})
            </div>
        </div>
        <div class="relative w-[200px] h-full bg-red-200">
           <button @click="$emit('remove', file)" class="w-8 h-8 bg-red-800 text-white cursor-pointer rounded-full hover:bg-red-900 absolute -top-2 -right-1">&times;</button>
        <img :src="file.url" :alt="file.name" :title="file.name" class="w-full h-full object-cover"  />
       </div>

        <span class="status-indicator loading-indicator text-gray-900 animate-pulse" v-show="file.status == 'loading'">In Progress</span>
        <span class="status-indicator success-indicator text-[#040] bg-[#6c6]" v-show="file.status == true">Uploaded</span>
        <span class="status-indicator failure-indicator text-white bg-[#933]" v-show="file.status == false">Error</span>
	</component>
</template>
<script setup lang="ts">
const props = defineProps({
    file: { type: Object, required: true },
    tag: { type: String, default: 'li' },
})

console.log("Props", props.file)



defineEmits(['remove'])
</script>
<style scoped >
.close-btn{
    @apply w-20 bg-red-800 text-white cursor-pointer rounded-full hover:bg-red-900
}

.status-indicator{
    @apply absolute right-1 bottom-1 h-20 py-0 px-2.5 leading-5 text-lg border-0 rounded-3xl appearance-none shadow-[0_0_0_rgba(0,0,0,0.3)]
}

</style>