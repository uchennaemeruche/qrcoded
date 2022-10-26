<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->
    <div class="sticky top-0 left-0 w-full z-10 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
        <Disclosure as="nav" class="" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company" />
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a v-for="item in navigation" :key="item.name" :href="item.href"
                                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <button type="button"
                                class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="sr-only">View notifications</span>
                                <svg x="0px" y="0px" viewBox="0 0 64 64" class="h-6 w-6" fill="#fff">
                                    <path
                                        d="M51.7932014,46.2020493c-0.1280022-0.3828011-0.3692017-0.6965981-0.6621017-0.9463997
                                        c0.0236015-0.6092987,0.0386009-1.2222977,0.0386009-1.8409996c0-13.6198997-5.641201-25.1546001-13.4345016-29.1104012
                                        c0.1161003-0.4706001,0.1844025-0.9601002,0.1844025-1.4666996c0-3.3774004-2.7380028-6.1154003-6.1154022-6.1154003
                                        s-6.1153984,2.7379999-6.1153984,6.1154003c0,0.5065994,0.0682983,0.9960995,0.1843987,1.4666996
                                        C18.0799007,18.2600498,12.4386997,29.7947502,12.4386997,43.41465c0,0.6187019,0.0150003,1.2317009,0.0386,1.8409996
                                        c-0.2929001,0.2498016-0.5340996,0.5635986-0.6620998,0.9463997l-2.8975,8.6665993
                                        c-0.4692001,1.4033012,0.5754004,2.8535004,2.0555,2.8535004h14.1247005c0.8610001,2.8908005,3.535799,5,6.7062988,5
                                        s5.8453026-2.1091995,6.7063026-5h14.1246986c1.4800987,0,2.5247002-1.4501991,2.0555-2.8535004L51.7932014,46.2020493z
                                        M26.7959003,16.1219501l1.4443989-0.7332001l-0.3878994-1.5727005c-0.0841999-0.3413-0.1252003-0.6613998-0.1252003-0.9784994
                                        c0-2.2480001,1.8290005-4.0769005,4.0769997-4.0769005s4.0769997,1.8289003,4.0769997,4.0769005
                                        c0,0.3170996-0.0410004,0.6371994-0.1251984,0.9784994l-0.3879013,1.5727005L36.8125,16.1219501
                                        c7.2531013,3.6816006,12.3186989,14.9046993,12.3186989,27.2926998c0,0.4183006-0.0060997,0.8419991-0.0181007,1.2691002
                                        H14.4953003c-0.0120001-0.4271011-0.0181007-0.8507996-0.0181007-1.2691002
                                        C14.4771996,31.0266495,19.5428009,19.8035507,26.7959003,16.1219501z M31.8041992,60.7221489
                                        c-2.0464001,0-3.8094997-1.2355003-4.5824986-3h9.164999C35.6137009,59.4866486,33.8506012,60.7221489,31.8041992,60.7221489z
                                        M52.7711983,55.6526489c-0.0500984,0.0695-0.1102982,0.0695-0.1359978,0.0695H38.8041992h-14H10.9731998
                                        c-0.0256996,0-0.0859003,0-0.1359997-0.0695c-0.0496998-0.0690994-0.0307999-0.1256981-0.0227003-0.1497993l2.8975-8.6665993
                                        c0.0229006-0.0681992,0.0866003-0.1141014,0.1588001-0.1141014h35.8667984c0.0722008,0,0.1359024,0.0459023,0.158802,0.1140022
                                        l2.8974991,8.6666985C52.8019981,55.5269508,52.8209,55.5835495,52.7711983,55.6526489z" />
                                </svg>
                            </button>

                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative ml-3">
                                <div>
                                    <MenuButton
                                        class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <a :href="item.href"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
                                            item.name }}</a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton @click="isSidebarOpen = !isSidebarOpen;"
                            class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="sr-only">Open main menu</span>
                            <svg v-if="!isSidebarOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <!-- <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    Hi There
                    <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                        :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                        :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </div>
                <div class="border-t border-gray-700 pt-4 pb-3">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
                            <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
                        </div>
                        <button type="button"
                            class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                            {{ item.name }}</DisclosureButton>
                    </div>
                </div>
            </DisclosurePanel> -->
        </Disclosure>


    </div>
</template>
  
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const isSidebarOpen = useState<boolean>('isSidebarOpen')
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    // { name: 'Team', href: '#', current: false },
    // { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
    // { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
</script>