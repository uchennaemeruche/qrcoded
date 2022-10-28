<template lang="">

    <div class="stepper-items" :ref="(el) =>{ setItems(el)}">
        <slot ></slot>
    </div>
   
</template>
<script setup lang="ts">
const { setItems } = useStep(1, false)

</script>
<style lang="css">
    .stepper-items{
       
       
    }
</style>