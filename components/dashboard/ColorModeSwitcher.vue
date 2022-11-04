<template >
    <div class="w-full mx-4 flex justify-between">
        <div class="flex items-center mr-4 mb-4">
            <input id="single" type="radio" name="radio" class="hidden" checked :value="modelValue"
                @change="$emit('update:modelValue', $event.target.value)" />
            <label for="single" class="flex items-center cursor-pointer text-xl text-gray-200">
                <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                Single Color
            </label>
        </div>
        <div class="flex items-center mr-4 mb-4">
            <input id="gradient" type="radio" name="radio" class="hidden" :value="modelValue"
                @change="$emit('update:modelValue', $event.target.value)"  />
            <label for="gradient" class="flex items-center cursor-pointer text-xl text-gray-200">
                <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                Color Gradient</label>
        </div>
    </div>


</template>

<script setup>
defineProps(['modelValue'])
const colorType = ref('')

</script>

<style lang="css" scoped>
input[type="radio"] + label span {
    transition: background .2s,
      transform .2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span{
  transform: scale(1.2);
} 

input[type="radio"]:checked + label span {
  background-color: #3490DC;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label{
   color: #3490DC; 
}


</style>
