
<template>
    <div class="flex flex-row" :class="darkTheme ? 'dark' : ''">
      <!-- <DashboardStepper/> -->
      <Stepper/>
    </div>
</template>


<script setup lang="ts">
const { darkTheme } = useDarkTheme()
// const enabled = useState<Boolean>('enabled', () => false)
const isSidebarOpen = useState<boolean>('isSidebarOpen', () => {
    if (process.client) {
        if (window.innerWidth >= 950) return true
        return false
    }
})

const hideSidebar = () => {
    if (process.client) {
        if (window.innerWidth <= 950)
            isSidebarOpen.value = false
    }
}
</script>

<style>
#sidedrawar {
    /* width: 400px; */
}
</style>


