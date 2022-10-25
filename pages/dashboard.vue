
<template>
    <div class="flex flex-row" :class="darkTheme ? 'dark' : ''">
        <div class="relative column-1 w-2/12 h-screen justify-center bg-blue-900">
            <DashboardDrawer2 />
        </div>
        <div class="flex flex-col md:flex-row w-10/12 z-10 bg-red-400">
            <div class="column-2 w-full md:w-4/12 h-full border-2 border-dashed md:mx-2 my-2 rounded-md "></div>
            <div class="column-3 w-full md:w-7/12 h-full border-2 border-dashed md:mx-2 my-2 rounded-md"></div>
        </div>

    </div>
</template>


<script setup lang="ts">
const { darkTheme } = useDarkTheme()
    // const enabled = useState<Boolean>('enabled', () => false)
</script>