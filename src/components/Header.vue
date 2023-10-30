<template>
    <header class="headers">
        <div class="container mx-auto">
            <div class="flex justify-between items-center p-5 gpa-6 md:hidden">
                <div>
                    <img src="../assets/images/Frame 180.svg" alt="cosinus_logo" class=" w-[38px] h-[48px] ">
                </div>
                <div>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="font-medium text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><i class='bx bx-menu text-[20px] p-2 bg-[#3F4CCF] rounded-lg text-white'></i></button>
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="hidden md:flex lg:hidden justify-between items-center p-5">
                <div class="w-1/3">
                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="h-[48px]" type="button"><i class='bx bx-menu text-[32px] p-2 bg-[#3F4CCF] rounded-lg text-white'></i> 
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard1</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="w-1/3 flex justify-center items-center  ">
                    <img src="../assets/images/Vector.png" alt="cosinus_logo" class="w-[65px] h-[80px]">
                </div>
                <div class="w-1/3 flex justify-end items-center ">
                    <select id="countries" class="bg-[#04042F] h-[48px] text-white border border-[#34B8A3] text-sm rounded-lg">
                        <option value="UZB">Uzb</option>
                        <option value="RUS">Rus</option>
                        <option value="ENG">Eng</option>
                      </select>
                </div>
            </div>
            <div class="hidden lg:flex justify-between items-center p-5">
                <div class="flex justify-center items-center gap-6">
                    <img src="../assets/images/Cosinus.svg" alt="" class="w-[94px] h-[48px]">
                    <div class="text-white flex justify-center items-center gap-10 ml-[64px]">
                        <a href="#">Bosh sahifa</a>
                        <a href="#">Portfolio</a>
                        <div class="flex items-center">
                            <a href="#">Cosinus academy</a>
                            <p class="p-1 bg-[#5A14B1] text-[10px] rounded-lg mb-5">yangi</p>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-end items-center gap-10">
                    <select id="countries" class="bg-[#0E0E37] h-[48px] text-white border border-[#34B8A3] text-sm rounded-lg">
                        <option value="UZB">Uzb</option>
                        <option value="RUS">Rus</option>
                        <option value="ENG">Eng</option>
                      </select>
                      <button class="language w-[130px] h-[48px] bg-[#343FA7] text-white hover:bg-[#1913EA] px-2 py-1 rounded-lg">Bog'lanish</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { initDropdowns } from 'flowbite'

    // initialize components based on data attribute selectors
    onMounted(() => {
        initDropdowns();
    })
</script>

<style lang="scss" scoped>

</style>