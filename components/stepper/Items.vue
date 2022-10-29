<template>
    <div class="stepper-items flex items-center" :ref="(el) =>{ setItems(el)}">
        <slot ></slot>
    </div>
   
</template>
<script setup lang="ts">
const { setItems } = useStep(1, false)
</script>