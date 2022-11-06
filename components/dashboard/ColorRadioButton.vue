<template >
    <div class="w-full mx-4 flex justify-between">
        <div class="flex items-center mr-4 mb-4" v-for="option,i in options" :key="option">
            <input type="radio" name="radio-input" :value="option" :id="option" @change="$emit('input', option)" class="hidden" :checked="i ==0" />
            <label :for="option" class="flex items-center cursor-pointer text-lg text-gray-400">
                <span class="w-4 h-4 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                {{option}}
            </label>
        </div>
    </div>


</template>

<script setup lang="tsx">
const props = defineProps({
    options:{type: Array<string>, required: true}
})

const {options} = toRefs(props) 

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
    box-shadow: 0px 0px 0px 2px white inset;
    @apply bg-blue-600
}

input[type="radio"]:checked + label{
   /* color: #3490DC;  */
   @apply text-blue-600
}


</style>
