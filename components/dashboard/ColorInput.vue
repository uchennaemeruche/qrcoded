<template lang="">
    <div class="flex items-center h-[35px] w-full" >
        <div class="w-4/5 h-full">
            <input class="color-holder" v-model="color">
        </div>
        <div class="h-full w-1/5">
            <input type="color" class="h-full w-full" v-model="color" @change="$emit('input', color)"
            style="border: 0.1rem solid rgb(227, 236, 242); background: rgb(255, 255, 255);" />
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    // show: {type: Boolean, default: false},
    // defaultColor: {type: String, default: '#FFFFFF'}
})

    // const {show} = toRefs(props)

    const color = ref('')
</script>
<style lang="">
    
</style>