<template>
    <div class="flex flex-col w-full md:flex-row md:mx-12 lg:mx-0">
        <div class="column-3 w-full md:w-7/12 h-full mt-4 p-3 border-2 border-dashed md:mx-2 my-2 rounded-md">
            <div class="mx-auto w-full">
                <RadioGroup v-model="selected">
                    <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                    <div class="space-y-2 flex flex-wrap ">
                        <RadioGroupOption as="template" v-for="code in qrcodeTypes" :key="code.type" :value="code"
                            v-slot="{ active, checked }">
                            <div :class="[
                              active
                                ? ''
                                : '',
                              checked ? 'bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ' : 'bg-white ',
                            ]"
                                class="relative cursor-pointer rounded-lg w-72 h-24 mt-2 mx-auto px-4 py-4 shadow-md focus:outline-none">
                                <div class="flex w-full items-center justify-between">
                                    <div class="flex items-center space-x-4">
                                        <svg width="29.983px" height="29.983px" :fill="code.color"
                                            :viewBox="code.viewBox" xmlns="http://www.w3.org/2000/svg">
                                            <path :d="code.path" />
                                        </svg>
                                        <div class="flex items-center">
                                            <div class="text-sm">
                                                <RadioGroupLabel as="p"
                                                    :class="checked ? 'text-blue-900' : 'text-gray-900'"
                                                    class="font-medium">
                                                    {{ code.type }}
                                                </RadioGroupLabel>
                                                <RadioGroupDescription as="span"
                                                    :class="checked ? 'text-blue-100' : 'text-gray-500'" class="inline">
                                                    <span>{{ code.description }}</span>
                                                </RadioGroupDescription>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-show="checked" class="shrink-0 text-white">
                                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                                            <path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
        </div>
        <div class="column-2 w-full md:w-4/12 h-full mt-4 p-3 border border-dashed md:mx-2 my-2 rounded-md ">
            <div class="relative aspect-[366/729] relative mx-auto w-full max-w-[366px]">
                <div
                    class="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl">
                </div>
                <div
                    class="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
                    <div class="flex flex-col w-full overflow-y-auto">
                        <div class="flex justify-between px-4 pt-4 fixed w-full z-10 bg-gray-900 py-2">
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                                <path d="M5 6h14M5 18h14M5 12h14" stroke="#fff" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                            </svg>
                            <p><span class="" style="color:#06B6D4">Qr</span><span
                                    class="text-white text-center">Codify</span></p>

                            <!-- <svg viewBox="0 0 79 24" fill="none" aria-hidden="true" class="h-6 flex-none">
                                            <path
                                                d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2.4 12a9.004 9.004 0 0 0 6.055 8.507c1.565.542 2.945-.85 2.945-2.507V6c0-1.657-1.38-3.049-2.945-2.507A9.004 9.004 0 0 0 2.4 12Z"
                                                fill="#06B6D4">
                                            </path>
                                            <path
                                                d="M33.004 17V6.818h3.818c.783 0 1.439.146 1.97.438.533.291.935.692 1.207 1.203.275.507.413 1.084.413 1.73 0 .653-.138 1.233-.413 1.74a2.948 2.948 0 0 1-1.218 1.198c-.537.288-1.198.433-1.983.433h-2.531v-1.517h2.282c.457 0 .832-.08 1.124-.238.291-.16.507-.378.646-.657.142-.278.214-.598.214-.96 0-.36-.072-.679-.214-.954a1.452 1.452 0 0 0-.651-.641c-.292-.156-.668-.234-1.129-.234h-1.69V17h-1.845Zm12.152.15c-.746 0-1.392-.165-1.939-.493a3.343 3.343 0 0 1-1.273-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.15-1.48.447-2.073a3.335 3.335 0 0 1 1.273-1.383c.547-.328 1.193-.492 1.94-.492.745 0 1.391.164 1.938.492.547.329.97.79 1.268 1.383.301.593.452 1.284.452 2.073 0 .789-.15 1.478-.452 2.068a3.309 3.309 0 0 1-1.268 1.377c-.547.328-1.193.492-1.939.492Zm.01-1.443c.404 0 .742-.11 1.014-.333.272-.225.474-.527.607-.905.136-.377.204-.798.204-1.262 0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.607-.91c-.272-.225-.61-.338-1.014-.338-.414 0-.759.113-1.034.338a2.041 2.041 0 0 0-.612.91 3.81 3.81 0 0 0-.198 1.268c0 .464.066.885.198 1.262.136.378.34.68.612.905.275.222.62.333 1.034.333Zm8.508 1.442c-.763 0-1.417-.167-1.964-.502a3.352 3.352 0 0 1-1.258-1.387c-.292-.593-.437-1.276-.437-2.048 0-.776.149-1.46.447-2.054a3.34 3.34 0 0 1 1.263-1.392c.547-.334 1.193-.502 1.939-.502.62 0 1.168.115 1.645.343.48.226.864.546 1.149.96.285.41.447.891.487 1.441h-1.72a1.644 1.644 0 0 0-.497-.92c-.259-.248-.605-.372-1.04-.372-.367 0-.69.1-.969.298-.278.196-.495.478-.651.845-.153.368-.229.81-.229 1.323 0 .52.076.968.229 1.342.152.371.366.658.641.86.279.2.605.298.98.298.265 0 .502-.05.71-.149.213-.102.39-.25.532-.442.143-.192.24-.426.294-.701h1.72a2.999 2.999 0 0 1-.477 1.437c-.275.414-.65.739-1.124.974-.474.232-1.03.348-1.67.348Zm6.39-2.545-.006-2.173h.289l2.744-3.067h2.103l-3.376 3.758h-.372l-1.383 1.482ZM58.422 17V6.818h1.8V17h-1.8Zm4.792 0-2.485-3.475 1.213-1.268L65.368 17h-2.153Zm6.245.15c-.766 0-1.427-.16-1.984-.478a3.233 3.233 0 0 1-1.278-1.362c-.298-.59-.447-1.285-.447-2.083 0-.786.149-1.475.447-2.069a3.384 3.384 0 0 1 1.263-1.392c.54-.334 1.175-.502 1.904-.502.47 0 .915.076 1.333.229.42.149.792.381 1.113.696.325.315.58.716.766 1.203.186.484.278 1.06.278 1.73v.552h-6.259v-1.213h4.534a1.935 1.935 0 0 0-.224-.92 1.625 1.625 0 0 0-.611-.641 1.719 1.719 0 0 0-.905-.234c-.368 0-.691.09-.97.269a1.848 1.848 0 0 0-.65.696c-.153.285-.231.598-.234.94v1.058c0 .444.08.825.243 1.144.163.315.39.556.681.726.292.165.634.248 1.025.248.261 0 .498-.036.71-.11.213-.075.397-.187.552-.332.156-.146.274-.327.353-.542l1.68.189a2.62 2.62 0 0 1-.606 1.163 2.958 2.958 0 0 1-1.133.766c-.461.179-.988.268-1.581.268Zm8.731-7.786v1.392h-4.39V9.364h4.39Zm-3.306-1.83h1.8v7.17c0 .241.036.427.109.556a.59.59 0 0 0 .298.258c.123.047.259.07.408.07.113 0 .215-.008.308-.025.096-.016.17-.031.219-.045l.303 1.407c-.096.034-.233.07-.412.11-.176.04-.392.063-.647.07a2.934 2.934 0 0 1-1.218-.204 1.895 1.895 0 0 1-.86-.706c-.209-.319-.311-.716-.308-1.194V7.534Z"
                                                fill="#fff">
                                            </path>
                                        </svg> -->
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                                <path
                                    d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                                    stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div class="mt-16 px-4 text-white flex flex-col mx-auto itemx-center">
                            <div class="text-2xl text-white">
                                <img class="h-18 w-18 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">

                            </div>
                            <div class="text-sm text-gray-500 text-center mt-4">
                                <p class="text-white text-lg">Uchenna Emeruche</p>
                                <p class="text-white">Software Engineer</p>

                            </div>
                        </div>
                        <div class="bg-gray-800 rounded-2xl w-full mt-4">
                            <div class="flex items-center justify-between px-6 py-2">
                                <div class="flex flex-col items-center">
                                    <div class="w-6 h-6 bg-skyblue">
                                        <svg class="text-white bg-white" focusable="false" viewBox="0 0 24 24"
                                            aria-hidden="true" style="font-size: 24px;">
                                            <path
                                                d="M16.18,21.3a5,5,0,0,1-3.53-1.46L4.16,11.35a5,5,0,0,1,0-7.07l.71-.7a3,3,0,0,1,4.24,0L11.23,5.7a3,3,0,0,1,0,4.24l-.6.6,2.83,2.83.6-.6a3,3,0,0,1,4.24,0l2.12,2.12a3,3,0,0,1,0,4.24l-.7.71A5,5,0,0,1,16.18,21.3ZM7,4.7A1,1,0,0,0,6.28,5l-.7.71a3,3,0,0,0,0,4.24l8.48,8.48a3,3,0,0,0,4.24,0l.71-.7a1,1,0,0,0,0-1.42l-2.12-2.12a1,1,0,0,0-1.42,0l-2,2L7.8,10.54l2-2a1,1,0,0,0,0-1.42L7.7,5A1,1,0,0,0,7,4.7Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="text-gray-500">Call</p>

                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-6 h-6 bg-skyblue">
                                        <svg class="text-white bg-white" focusable="false" viewBox="0 0 24 24"
                                            aria-hidden="true" style="font-size: 24px;">
                                            <path
                                                d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z">
                                            </path>
                                            <path
                                                d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z">
                                            </path>
                                            <path
                                                d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="text-gray-500">Email</p>

                                </div>
                                <div class="flex flex-col items-center">
                                    <div class="w-6 h-6 bg-skyblue">
                                        <svg class="text-white bg-white" focusable="false" viewBox="0 0 24 24"
                                            aria-hidden="true" style="font-size: 24px;">
                                            <path
                                                d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z">
                                            </path>
                                            <path
                                                d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p class="text-gray-500">Location</p>

                                </div>
                            </div>
                        </div>
                        <div class="mt-6 flex-auto rounded-t-2xl bg-white">
                            <div class="px-4 py-6">
                                <div class="space-y-6">
                                    <!-- <div>
                                        <div class="text-sm text-gray-500">Email address</div>
                                        <div class="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                            uchenna@gmail.com</div>
                                    </div> -->
                                    <div>
                                        <div class="text-sm text-gray-500">Website</div>
                                        <a href="https://uchennaemeruche.com"
                                            class="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                            https://uchennaemeruche.com</a>
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-500">Address</div>
                                        <div class="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                            Ukay Cresent, Off EUK, 112</div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-gray-500">Socials</div>
                                        <div class="flex items-center justify-between px-6 py-2">
                                            <svg class="text-white bg-white w-8 h-8" focusable="false"
                                                viewBox="0 0 24 24" aria-hidden="true" style="font-size: 24px;">
                                                <path
                                                    d="M16.18,21.3a5,5,0,0,1-3.53-1.46L4.16,11.35a5,5,0,0,1,0-7.07l.71-.7a3,3,0,0,1,4.24,0L11.23,5.7a3,3,0,0,1,0,4.24l-.6.6,2.83,2.83.6-.6a3,3,0,0,1,4.24,0l2.12,2.12a3,3,0,0,1,0,4.24l-.7.71A5,5,0,0,1,16.18,21.3ZM7,4.7A1,1,0,0,0,6.28,5l-.7.71a3,3,0,0,0,0,4.24l8.48,8.48a3,3,0,0,0,4.24,0l.71-.7a1,1,0,0,0,0-1.42l-2.12-2.12a1,1,0,0,0-1.42,0l-2,2L7.8,10.54l2-2a1,1,0,0,0,0-1.42L7.7,5A1,1,0,0,0,7,4.7Z">
                                                </path>
                                            </svg>
                                            <svg class="text-white bg-white w-8 h-8" focusable="false"
                                                viewBox="0 0 24 24" aria-hidden="true" style="font-size: 24px;">
                                                <path
                                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z">
                                                </path>
                                                <path
                                                    d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z">
                                                </path>
                                                <path
                                                    d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z">
                                                </path>
                                            </svg>
                                            <svg class="text-white bg-white w-8 h-8" focusable="false"
                                                viewBox="0 0 24 24" aria-hidden="true" style="font-size: 24px;">
                                                <path
                                                    d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z">
                                                </path>
                                                <path
                                                    d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="mt-6 rounded-lg bg-cyan-500 py-2 px-3 text-center text-sm font-semibold text-white">
                                    Save Contact</div>
                            </div>

                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 366 729" aria-hidden="true"
                    class="pointer-events-none absolute inset-0 h-full w-full fill-gray-100">
                    <path fill="#F2F2F2" fill-rule="evenodd" clip-rule="evenodd"
                        d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z">
                    </path>
                    <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4"></rect>
                </svg><img alt="" src="/images/phone-frame.d4b6b62a.svg" width="366" height="729" decoding="async"
                    data-nimg="future" class="pointer-events-none absolute inset-0 h-full w-full" loading="lazy">
            </div>
        </div>


        <TransitionRoot :show="isOpen" as="template" enter="duration-300 ease-out" enter-from="opacity-0"
            enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <Dialog as="div" @close="closeModal" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <DialogTitle as="h1"
                                    class="text-xl font-bold tracking-tight leading-tight text-gray-900">
                                    Create vCard Code
                                    <div class="mx-4 p-4">
                                        <div class="flex items-center">
                                            <div class="flex items-center text-teal-600 relative">
                                                <div
                                                    class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-900">
                                                    <svg width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="feather feather-bookmark ">
                                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div
                                                    class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                                                    Personal</div>
                                            </div>
                                            <div
                                                class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600">
                                            </div>

                                            <div class="flex items-center text-gray-500 relative">
                                                <div
                                                    class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                                    <svg width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="feather feather-mail ">
                                                        <path
                                                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                        </path>
                                                        <polyline points="22,6 12,13 2,6"></polyline>
                                                    </svg>
                                                </div>
                                                <div
                                                    class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                                    Message</div>
                                            </div>
                                            <div
                                                class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300">
                                            </div>
                                            <div class="flex items-center text-gray-500 relative">
                                                <div
                                                    class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                                    <svg width="100%" height="100%" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" class="feather feather-database ">
                                                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                                    </svg>
                                                </div>
                                                <div
                                                    class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                                    Confirm</div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogTitle>
                                <!-- <hr class="mt-2" /> -->
                                <div class="mt-2">
                                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1
                                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Personal Details
                                        </h1>
                                        <form class="space-y-4 md:space-y-6" action="#">
                                            <div>
                                                <label for="fullname"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Name</label>
                                                <input type="text" name="fullname" id="fullname"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="John Doe" required="">
                                            </div>
                                            
                                            <div>
                                                <label for="email"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    email</label>
                                                <input type="email" name="email" id="email"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="johndoe@company.com" required="">
                                            </div>
                                            <div>
                                                <label for="phone"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                                <input type="tel" name="phone" id="phone"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="+2348 621 3932" required="">
                                            </div>
                                            <div>
                                                <label for="company"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Company Name/Business Name</label>
                                                <input type="text" name="company" id="company"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="xyz Ltd." required="">
                                            </div>
                                            <div>
                                                <label for="job"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Job/Role/Position</label>
                                                <input type="text" name="job" id="job"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Managing Director" required="">
                                            </div>
                                            <div>
                                                <label for="website"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                   Website</label>
                                                <input type="text" name="website" id="website"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="https://www.xyz.com" required="">
                                            </div>
                                            <button type="submit"
                                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                Next</button>
                                        </form>
                                    </div>
                                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        
                                    </div>
                                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1
                                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Address
                                        </h1>
                                        <div>
                                                <label for="street"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Street</label>
                                                <input type="text" name="street" id="street"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="No 32 St" required="">
                                            </div>
                                        <div>
                                                <label for="city"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    City</label>
                                                <input type="text" name="city" id="city"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Yen" required="">
                                            </div>
                                        <div>
                                                <label for="state"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    State</label>
                                                <input type="text" name="state" id="state"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="BY" required="">
                                            </div>
                                        <div>
                                                <label for="zip"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Zip Code</label>
                                                <input type="text" name="zip" id="zip"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="53532124" required="">
                                            </div>
                                        <div>
                                                <label for="country"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                    Country</label>
                                                <input type="text" name="country" id="country"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Nigeria" required="">
                                            </div>
                                            
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <button type="button"
                                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="closeModal">
                                        Close
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
<script setup>
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

const qrcodeTypes = [
    {
        type: 'Website',
        description: 'Open a URL',
        path: '160 GB SSD disk',
    },
    {
        type: 'vCard',
        description: 'Share Contact Details',
        path: 'M19 3H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-6 4h4v1h-4V7zm-2 7.803a2.31 2.31 0 0 0-.529-.303c-1.18-.508-2.961-1.26-2.961-2.176 0-.551.359-.371.518-1.379.066-.418.385-.007.445-.961 0-.38-.174-.475-.174-.475s.088-.562.123-.996c.036-.453-.221-1.8-1.277-2.097-.186-.188-.311-.111.258-.412-1.244-.059-1.534.592-2.196 1.071-.564.42-.717 1.085-.689 1.439.037.433.125.996.125.996s-.175.094-.175.474c.061.954.38.543.445.961.158 1.008.519.828.519 1.379 0 .916-1.781 1.668-2.961 2.176a2.503 2.503 0 0 0-.471.26V5h9v9.803zM18 11h-5v-1h5v1z',
        color: '',
        viewBox: '0 0 20 20'
    },
    {
        type: 'Video',
        description: 'Share Video Link and Download',
        path: 'M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z',
        color: '#212121',
        viewBox: '0 0 28 28'
    },
    {
        type: 'PDF',
        description: 'Share documents in any format',
        path: "M51.383,50.713H21.667v-2.336h29.714v2.336H51.383z M51.104,56.553H21.388v2.336h29.716V56.553z M51.101,17.236H35.57 v2.336h15.531V17.236z M51.101,24.975H35.57v2.335h15.531V24.975z M51.101,32.706H21.942v2.336h29.16v-2.336H51.101z  M51.101,40.448H21.942v2.336h29.16v-2.336H51.101z M25.175,2.245l-6.836,4.94h3.208h38.677v55.49v3.864v0.784v0.78v1.88H13.716 V31.375h3.649v31.163h38.758V11.88H17.367v2.614h-3.648v-7.31L23.666,0h41.659L63.19,2.245H25.175z M38.025,64.436h-3.505v3.504 h3.505V64.436z M4.658,28.059h1.075h1.065v-3.647c0.604-0.016,1.32-0.021,2.146-0.016c1.168,0,2.055-0.288,2.666-0.86 c0.607-0.569,0.913-1.412,0.913-2.517c0-1.045-0.306-1.843-0.913-2.385c-0.61-0.546-1.498-0.822-2.666-0.822H5.726H4.658V28.059z  M6.797,19.576h1.784c0.601,0,1.049,0.12,1.351,0.365c0.299,0.243,0.448,0.611,0.448,1.099c0,0.535-0.149,0.927-0.448,1.197 c-0.301,0.263-0.75,0.396-1.351,0.396H6.797V19.576z M14.176,28.059h1.067h3.145c1.469,0,2.581-0.457,3.343-1.37 c0.761-0.912,1.139-2.249,1.139-4.005c0-1.596-0.367-2.806-1.101-3.635c-0.729-0.827-1.801-1.238-3.209-1.238h-3.316h-1.067V28.059 L14.176,28.059z M16.315,19.576h1.981c0.815,0,1.422,0.265,1.826,0.8c0.405,0.529,0.608,1.326,0.608,2.389 c0,1.177-0.22,2.058-0.651,2.646c-0.437,0.589-1.087,0.885-1.956,0.885h-1.806L16.315,19.576L16.315,19.576z M25.558,28.059h1.067 v-4.334h4.489v-0.885v-0.88h-4.489v-2.327h5.151V18.72v-0.909h-7.291v10.248H25.558z",
        color: '',
        viewBox: '0 0 69.983 69.983'
    },
    {
        type: 'Images',
        description: 'Image Gallery made easy',
        path: '160 GB SSD disk',
    },
    {
        type: 'Business',
        description: 'Create a business page and share information about your business',
        path: '160 GB SSD disk',
    },
    {
        type: 'Apps',
        description: 'Share link to the new big app you created or you want friends to download',
        path: '160 GB SSD disk',
    },
    {
        type: 'Coupon',
        description: 'Let friends access your coupons easily',
        path: '160 GB SSD disk',
    },
    {
        type: 'Wi-Fi',
        description: 'Share Wi-Fi connection with friends',
        path: '160 GB SSD disk',
    },
    {
        type: 'Menu',
        description: 'Share Wi-Fi connection with friends',
        path: '160 GB SSD disk',
    },
    {
        type: 'Feedback',
        description: 'Give feedback',
        path: '160 GB SSD disk',
    },
]
const selected = ref(qrcodeTypes[0])
const typeSelected = useState('typeSelected', () => selected >= 0)
const isOpen = useState('isOpen')

function closeModal() {
    isOpen.value = false
}

</script>
<style lang="">
    
</style>