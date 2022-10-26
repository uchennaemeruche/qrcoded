
<template>
    <div class="flex flex-row" :class="darkTheme ? 'dark' : ''">
        <div class="absolute top-0 left-0 w-full lg:relative w-72 lg:w-2/12 z-10" id="sidedrawar">
            <DashboardDrawer2 />
        </div>

        <!-- Sidebars buttons -->

        <!-- Main Content -->
        <div class="flex flex-col w-full lg:w-10/12">
            <DashboardNavbar/>
            <!-- <div class="fixed top-0 flex w-full h-12 bg-white">
                <div class="sticky lg:hidden flex items-center space-x-4 ">
                    <button @click="isSidebarOpen = !isSidebarOpen;"
                        class="p-1 text-indigo-400 transition-colors duration-200 rounded-md bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-dark focus:outline-none focus:ring">
                        <span class="sr-only">Toggle main manu</span>
                        <span aria-hidden="true">
                            <svg v-show="!isSidebarOpen" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg v-show="isSidebarOpen" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div> -->
            <div class="flex flex-col md:flex-row mx-12 lg:mx-0 mt-10" @click="hideSidebar()">
               <NuxtPage/>
            </div>

        </div>
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


