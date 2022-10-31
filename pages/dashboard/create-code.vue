<template>
    <div class="flex flex-col w-full md:flex-row md:mx-12 lg:mx-0">
        <div class="column-3 w-full md:w-7/12 h-full mt-4 p-3 border-2 border-dashed md:mx-2 my-2 rounded-md">
            <div class="mx-auto w-full">
                <WebsiteQrCode />
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
                            <p>
                                <span class="" style="color:#06B6D4">Qr</span>
                                <span class="text-white text-center">Codify</span>
                            </p>
                            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                                <path
                                    d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                                    stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div class="display-content w-full flex flex-col hidden">
                            <div class="mt-16 px-4 text-white flex flex-col mx-auto itemx-center">
                                <div class="text-2xl text-white">
                                    <img class="h-18 w-18 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">

                                </div>
                                <div class="text-sm text-gray-500 text-center mt-4">
                                    <p class="text-white text-lg">{{vCardState.fullname || 'John Doe'}}</p>
                                    <p class="text-white">{{vCardState.role || 'Software Engineer'}}</p>

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
                                                {{vCardState.website || 'https://uchennaemeruche.com'}}
                                            </a>
                                        </div>
                                        <div>
                                            <div class="text-sm text-gray-500">Address</div>
                                            <div class="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                                {{vCardState.address || 'Ukay Cresent, Off EUK, 112'}}</div>
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
                        <div class="w-full">
                            <ContentBoard />
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


    </div>
</template>
<script setup lang="tsx">



const route = useRoute()
const codeType = ref(route.query.codeType ? route.query.codeType : '')


const vCardState = reactive({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    website: "",
    address: "",

})


const steps = [
    {
        text: "Personal Details",
    },
    {
        text: "NewMsg",
    },
    {
        "text": "Confirm",
    }
]


// const VCard = defineComponent(() =>{
//     const state = reactive({

//     })
//     return () => (
//         <Stepper  v-show="codeType == 'vCard'">
//             <div class="text-xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
//                 Create {codeType} code
//                 <div class="p-4 mx-12">
//                     <StepperHeader>
//                         <StepperStep>
//                             <div class="text-teal-600 text-sm">
//                                 {steps[0].text}
//                             </div>
//                         </StepperStep>
//                         <StepperDivider />
//                         <StepperStep>
//                             <div class="text-sm text-teal-600">
//                                 {steps[1].text}
//                             </div>
//                         </StepperStep>
//                         <StepperDivider />
//                         <StepperStep>
//                             <div class="text-sm text-teal-600">
//                                 {steps[2].text}
//                             </div>
//                         </StepperStep>
//                         <StepperDivider />
//                     </StepperHeader>
//                 </div>
//             </div>

//             <div class="h-[500px] overflow-y-auto">
//             <StepperItems>
//                 <StepperContent>
//                     <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1
//                             class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-blue-900">
//                             Personal Details
//                         </h1>
//                         <form class="space-y-4 md:space-y-6" action="#">
//                             <div>
//                                 <label for="fullname"
//                                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                     Name</label>
//                                 <input type="text" name="fullname" id="fullname" v-model={vCardState.fullname}
//                                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-100 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-100 dark:focus:border-blue-500"
//                                     placeholder="John Doe" required="true"/>
//                             </div>

//                             <div>
//                                 <label for="email"
//                                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                     email</label>
//                                 <input type="email" name="email" id="email" v-model={vCardState.email}
//                                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                     placeholder="johndoe@company.com" required="true"/>
//                             </div>
//                             <div>
//                                 <label for="phone"
//                                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Phone</label>
//                                 <input type="tel" name="phone" id="phone" v-model={vCardState.phone}
//                                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                     placeholder="+2348 621 3932" required="true"/>
//                             </div>
//                             <div>
//                                 <label for="company"
//                                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                     Company Name/Business Name</label>
//                                 <input type="text" name="company" id="company" v-model={vCardState.company}
//                                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                     placeholder="xyz Ltd." required="true"/>
//                             </div>
//                             <div>
//                                 <label for="job"
//                                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                     Job/Role/Position</label>
//                                 <input type="text" name="job" id="job" v-model={vCardState.role}
//                                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                     placeholder="Managing Director" required="true"/>
//                             </div>
//                             <div>
//                                 <label for="website"
//                                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">
//                                     Website</label>
//                                 <input type="text" name="website" id="website" v-model={vCardState.website}
//                                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                     placeholder="https://www.xyz.com" required="true"/>
//                             </div>
//                         </form>
//                     </div>
//                 </StepperContent>
//                 <StepperContent>
//                     <div class="w-full h-full w-full p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1
//                             class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-blue-900">
//                             Address
//                         </h1>
//                         <div>
//                             <label for="street"
//                                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                 Street</label>
//                             <input type="text" name="street" id="street"
//                                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                 placeholder="No 32 St" required="true"/>
//                         </div>
//                         <div>
//                             <label for="city"
//                                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                 City</label>
//                             <input type="text" name="city" id="city"
//                                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                 placeholder="Yen" required="true" />
//                         </div>
//                         <div>
//                             <label for="state"
//                                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                 State</label>
//                             <input type="text" name="state" id="state"
//                                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                 placeholder="BY" required="true" />
//                         </div>
//                         <div>
//                             <label for="zip"
//                                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                 Zip Code</label>
//                             <input type="text" name="zip" id="zip"
//                                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                 placeholder="53532124" required="true" />
//                         </div>
//                         <div>
//                             <label for="country"
//                                 class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">Your
//                                 Country</label>
//                             <input type="text" name="country" id="country"
//                                 class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-600 dark:placeholder-gray-600 dark:text-blue-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                 placeholder="Nigeria" required="true" />
//                         </div>
//                     </div>
//                 </StepperContent>
//                 <StepperContent>
//                     <div class="w-full h-full w-full p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <h1
//                             class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-blue-900">
//                             Third Content Here
//                         </h1>
//                     </div>
//                 </StepperContent>
//             </StepperItems>
//             </div>
//         </Stepper>
//     )
// })




const DisplayPhoneContent = () => {
    const state = reactive({
        displayContent: null
    })
    return (
        <div class="text-white text-center">
            <p>Hi There: {state.displayContent}</p>
        </div>
    )
}


const ContentBoard = () => {
    return (
        <div class="text-xl font-bold tracking-tight leading-tight text-white mt-16">
            <div class="w-full p-6 text-center my-auto h-full">
                <p>Scanning the QR Code will redirect you to the website you want.</p>
            </div>
        </div>
    )
}

const WebsiteQrCode = () => {
    const state = reactive({
        url: ''
    })

    return (
        <div class="text-xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
            <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-blue-900">
                    Create {codeType.value} Qrcode
                </h1>
                <Stepper>
                    {({ currentStep, nextStep, previousStep }) => (
                        <section>
                            <StepperHeader>
                                <StepperStep>
                                    <div class="text-teal-600 text-sm">Website Information</div>
                                </StepperStep>
                                <StepperDivider />
                                <StepperStep>
                                    <div class="text-sm text-teal-600">Configuration</div>
                                </StepperStep>
                            </StepperHeader>
                            <StepperItems>
                                <StepperContent>
                                    <form class="space-y-4 md:space-y-6 mt-16">
                                        <div>
                                            <label for="website"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-900">
                                                Submit Website URL to create your QrCode</label>
                                            <input type="text" name="url" id="website" v-model={state.url}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-100 dark:placeholder-gray-400 dark:text-blue-900 dark:focus:ring-blue-100 dark:focus:border-blue-500"
                                                placeholder="www.mywebsite.com" required="true" />
                                        </div>

                                        <button onClick={(e) => { e.preventDefault(); nextStep(currentStep) }}
                                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Next
                                        </button>
                                    </form>
                                </StepperContent>
                                <StepperContent>
                                    <div class="space-y-4 md:space-y-6 mt-16">
                                        <form class="space-y-4 md:space-y-6 mt-18">
                                            <DashboardQrcodeSize />
                                            <DashboardQrCodeColor/>
                                            <DashboardQrCodeLogo/>
                                            <DashboardFileUploader/>
                                            <button onClick={(e) => { e.preventDefault(); previousStep(currentStep) }}
                                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                Previous
                                            </button>
                                        </form>
                                    </div>
                                </StepperContent>
                            </StepperItems>
                        </section>
                    )}
                </Stepper>
            </div>
        </div>
    )
}

</script>
<style lang="css">
#wrapper {
    width: 1300px;
}
</style>


