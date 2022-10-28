<template>
    <div class="flex justify-between" :ref="(el) => {setHeaders(el)}">
            <slot></slot>
    </div>
</template>
<script setup>
const { setHeaders } = useStep(1, false)


</script>
<style lang="css">

</style>