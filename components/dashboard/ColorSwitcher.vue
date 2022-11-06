<template>
    <div class="w-full flex">
        <a class="inline-flex space-x-4 justify-center items-center py-2 text-gray-500 rounded cursor-pointer ">
        <Switch v-model="item" :class="item ? 'bg-blue-600' : 'bg-gray-300'" @update:modelValue="(value) => $emit('input', value)"
            class="relative inline-flex h-5 w-11 items-center rounded-full">
            <span class="sr-only">Transparent background</span>
            <span :class="item ? 'translate-x-6' : 'translate-x-1'"
                class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
        </Switch>
        <h6 class="text-lg font-normal text-gray-900 dark:text-gray-300">{{title}}</h6>
    </a>
    </div>
</template>
<script setup>
import { Switch } from '@headlessui/vue'
const props = defineProps({
    item:{type: Boolean, required: true},
    title:{type: String, required: true}
})

const {item, title} = toRefs(props) 

defineEmits(['input'])

</script>
<style lang="css">
    
</style>