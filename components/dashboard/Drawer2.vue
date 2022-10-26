<template >
   

        <!-- Sidebar first column -->
        <!-- Backdrop -->
        <!-- <div v-show="isSidebarOpen" @click="isSidebarOpen = false"
            class="lg:hidden fixed inset-0 z-10 bg-indigo-800 " style="opacity: 0.5" aria-hidden="true">
        </div> -->

        <Transition v-show="isSidebarOpen" 
            enter-class="transition-all transform duration-300 ease-in-out"
            enter-from-class="-translate-x-full opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-class="transition-all transform duration-300 ease-in-out"
            leave-from-class="translate-x-0 opacity-100"
            leave-to-class="-translate-x-full opacity-0"
            class="fixed inset-y-0 z-10 flex-shrink-0 top-0 left-0 w-full h-full" aria-label="Sidenav">
            <div class="h-full " style="height: 100vh;" >
                <div
                class="overflow-y-auto py-12 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul class="space-y-2">
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg aria-hidden="true"
                                class="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span class="ml-3">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/create-code"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                </path>
                            </svg>
                            <span class="ml-3">Create QRCode</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                </path>
                                <path
                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                </path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Active QrCodes</span>
                            <span
                                class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                6
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                            <span
                                class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                2
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-3">Billing</span>
                        </a>
                    </li>
                </ul>
                <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path fill-rule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-3">API Docs</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                                </path>
                            </svg>
                            <span class="ml-3">Components</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="ml-3">Help</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div
                class="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
                <a class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer ">
                    <Switch v-model="darkTheme" :class="darkTheme ? 'bg-blue-600' : 'bg-gray-300'"
                        class="relative inline-flex h-6 w-11 items-center rounded-full">
                        <span class="sr-only">Enable notifications</span>
                        <span :class="darkTheme ? 'translate-x-6' : 'translate-x-1'"
                            class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </Switch>
                </a>
                <a href="#" data-tooltip-target="tooltip-settings"
                    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <div id="tooltip-settings" role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                    Settings page
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <!-- Dropdown -->
                <div class="block md:hidden">
                    <Menu as="div" class="relative inline-block text-left">
                        <div>

                            <MenuButton type="button" data-dropdown-toggle="language-dropdown"
                                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 60 60"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M52.179,40.5l-5.596,8.04l-3.949-3.241c-0.426-0.352-1.057-0.287-1.407,0.138c-0.351,0.427-0.289,1.058,0.139,1.407
                    l4.786,3.929C46.331,50.921,46.556,51,46.786,51c0.045,0,0.091-0.003,0.137-0.01c0.276-0.038,0.524-0.19,0.684-0.419l6.214-8.929
                    c0.315-0.453,0.204-1.076-0.25-1.392C53.117,39.933,52.495,40.046,52.179,40.5z" />
                                        <path d="M54.164,35.163C54.709,32.978,55,30.742,55,28.5C55,13.337,42.664,1,27.5,1S0,13.337,0,28.5
                    c0,8.01,3.444,15.229,8.927,20.259l-0.026,0.023l0.891,0.751c0.056,0.047,0.117,0.086,0.173,0.133
                    c0.477,0.396,0.972,0.772,1.476,1.136c0.159,0.115,0.318,0.23,0.479,0.341c0.535,0.369,1.085,0.719,1.646,1.051
                    c0.122,0.071,0.244,0.141,0.366,0.211c0.613,0.349,1.239,0.678,1.881,0.981c0.047,0.022,0.094,0.042,0.141,0.064
                    c2.089,0.971,4.319,1.684,6.65,2.105c0.062,0.011,0.123,0.022,0.185,0.033c0.723,0.125,1.455,0.225,2.197,0.292
                    c0.09,0.008,0.181,0.013,0.271,0.021C25.998,55.961,26.744,56,27.5,56c3.262,0,6.454-0.577,9.503-1.702
                    C39.389,57.168,42.984,59,47,59c7.168,0,13-5.832,13-13C60,41.478,57.677,37.492,54.164,35.163z M2,28.5C2,14.439,13.439,3,27.5,3
                    S53,14.439,53,28.5c0,1.903-0.214,3.804-0.639,5.666c-0.017-0.008-0.036-0.013-0.053-0.021c-0.376-0.169-0.762-0.32-1.156-0.453
                    c-0.034-0.011-0.067-0.026-0.101-0.037c-0.411-0.135-0.83-0.251-1.258-0.345c-0.02-0.005-0.04-0.011-0.06-0.016
                    c-0.417-0.09-0.841-0.158-1.271-0.207c-0.03-0.004-0.06-0.01-0.09-0.014C47.921,33.027,47.464,33,47,33
                    c-5.923,0-10.923,3.986-12.485,9.413C34.077,42,33.818,41.425,33.818,40.8v-2.957c0.198-0.243,0.405-0.518,0.617-0.817
                    c1.096-1.547,1.975-3.269,2.616-5.123c1.266-0.602,2.085-1.864,2.085-3.289v-3.545c0-0.866-0.318-1.708-0.886-2.369v-4.667
                    c0.052-0.52,0.236-3.448-1.883-5.864C34.524,10.065,31.541,9,27.5,9s-7.024,1.065-8.867,3.168
                    c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.886,1.503-0.886,2.369v3.545c0,1.101,0.494,2.128,1.339,2.821
                    c0.81,3.173,2.476,5.575,3.092,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313c-0.253,0.138-0.502,0.298-0.752,0.477
                    C5.276,42.792,2,36.022,2,28.5z M25.605,53.922c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.266-0.131-1.893-0.234
                    c-0.026-0.004-0.052-0.01-0.077-0.014c-1.327-0.222-2.632-0.548-3.903-0.974c-0.034-0.011-0.068-0.023-0.102-0.035
                    c-1.237-0.42-2.44-0.939-3.601-1.544c-0.067-0.035-0.135-0.068-0.201-0.103c-0.515-0.275-1.019-0.573-1.515-0.883
                    c-0.143-0.09-0.284-0.181-0.425-0.273c-0.456-0.298-0.905-0.608-1.343-0.936c-0.045-0.034-0.088-0.07-0.133-0.104
                    c0.032-0.018,0.064-0.036,0.097-0.054l7.907-4.313c1.359-0.742,2.204-2.165,2.204-3.714v-3.603l-0.233-0.278
                    c-0.021-0.025-2.176-2.634-2.999-6.215l-0.091-0.396l-0.341-0.221c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545
                    c0-0.465,0.198-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131c-0.003-0.024-0.298-2.429,1.396-4.36
                    C21.583,11.837,24.06,11,27.5,11c3.425,0,5.897,0.83,7.346,2.466c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298
                    c0.359,0.324,0.557,0.758,0.557,1.223v3.545c0,0.724-0.475,1.356-1.181,1.574l-0.498,0.154l-0.16,0.496
                    c-0.589,1.833-1.429,3.525-2.496,5.032c-0.259,0.367-0.514,0.695-0.736,0.948l-0.248,0.283V40.8c0,1.587,0.868,3.015,2.268,3.746
                    C34.033,45.024,34,45.508,34,46c0,0.292,0.01,0.583,0.029,0.873c0.007,0.103,0.021,0.205,0.031,0.307
                    c0.009,0.096,0.018,0.191,0.029,0.287c0.01,0.09,0.015,0.181,0.027,0.27c0.023,0.17,0.056,0.338,0.086,0.507
                    c0.02,0.115,0.035,0.231,0.058,0.345c0,0,0.002,0.008,0.003,0.012c0.006,0.03,0.015,0.058,0.021,0.088
                    c0.031,0.146,0.068,0.291,0.104,0.436c0.025,0.101,0.045,0.202,0.072,0.302c0.024,0.088,0.055,0.173,0.081,0.26
                    c0.034,0.116,0.07,0.231,0.108,0.345c0.024,0.072,0.042,0.145,0.067,0.216c0.07,0.201,0.15,0.399,0.23,0.596
                    c0.001,0.003,0.002,0.005,0.003,0.008c0.061,0.15,0.125,0.297,0.191,0.444c0.049,0.109,0.1,0.218,0.152,0.326
                    c0.034,0.071,0.064,0.143,0.099,0.213c0.023,0.046,0.05,0.09,0.074,0.136c0.084,0.163,0.173,0.322,0.264,0.48
                    c0.027,0.047,0.051,0.096,0.078,0.143C33.119,53.527,30.33,54,27.5,54C26.866,54,26.234,53.969,25.605,53.922z M47,57
                    c-3.661,0-6.901-1.805-8.902-4.564c-0.083-0.114-0.158-0.231-0.236-0.347c-0.054-0.08-0.111-0.158-0.162-0.239
                    c-0.043-0.069-0.085-0.138-0.127-0.208c-0.045-0.074-0.085-0.15-0.128-0.225c-0.069-0.122-0.143-0.241-0.207-0.365
                    c-0.047-0.091-0.089-0.185-0.134-0.278c-0.012-0.025-0.023-0.051-0.035-0.076c-0.075-0.157-0.153-0.312-0.221-0.472
                    c-0.036-0.085-0.063-0.173-0.097-0.258c-0.077-0.199-0.155-0.398-0.221-0.602c-0.031-0.095-0.055-0.193-0.083-0.289
                    c-0.009-0.03-0.017-0.059-0.025-0.088c-0.056-0.199-0.11-0.399-0.155-0.603c-0.014-0.063-0.025-0.127-0.038-0.191
                    c-0.012-0.06-0.025-0.121-0.036-0.181c-0.041-0.222-0.075-0.446-0.103-0.672c-0.003-0.026-0.006-0.052-0.009-0.079
                    c-0.009-0.082-0.022-0.164-0.029-0.246C36.021,46.681,36,46.343,36,46c0-0.315,0.021-0.626,0.047-0.934
                    c0.028-0.295,0.067-0.599,0.122-0.919l0.074-0.433C37.298,38.742,41.719,35,47,35c0.446,0,0.89,0.034,1.332,0.089
                    c0.101,0.012,0.199,0.031,0.299,0.046c0.365,0.055,0.728,0.127,1.086,0.219c0.075,0.019,0.15,0.037,0.225,0.058
                    c0.882,0.247,1.735,0.601,2.537,1.063C55.773,38.377,58,41.93,58,46C58,52.065,53.065,57,47,57z" />
                                    </g>
                                </svg>
                            </MenuButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute bottom-0 left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Profile</a>
                                    </MenuItem>
                                   
                                </div>
                                
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Share Profile</a>
                                    </MenuItem>
                                </div>
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                    <a href="#"
                                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
            </div>
        </Transition>
</template>
<script setup lang="ts">
import { Switch, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { darkTheme, setDarkTheme } = useDarkTheme()
const isSidebarOpen = useState<boolean>('isSidebarOpen')
// const isSidebarOpen = ref(true)

</script>
