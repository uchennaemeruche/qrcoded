<template>
    <div class="flex justify-between" :ref="(el) => {updateHeaders(el)}">
        <slot></slot>
        <!-- <slot name="divider"></slot> -->
    </div>
</template>
<script setup>
const { setHeaders, setDividers, headers, dividers } = useStep(1, false)

const updateHeaders = (el) => {
    if (headers.value == null) setHeaders(el.getElementsByClassName('step-item'))

    if (dividers.value == null) setDividers(el.getElementsByClassName('divider'))
}

</script>
<style lang="css">

</style>