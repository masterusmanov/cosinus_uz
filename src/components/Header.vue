<template>
    <header class="headers sticky top-0 z-50 bg-[#04042F] border-b-2 border-[#8F8DED]"> 
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
                            <a href="home" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{$t('translation.navbar.list.one')}}</a>
                          </li>
                          <li>
                            <a href="#portfolio" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{$t('translation.navbar.list.two')}}</a>
                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{$t('translation.navbar.list.three')}}</a>
                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Telegram bot</a>
                          </li>
                          <li>
                            <select id="countries" @change="changeLanguage" class="h-[36px] text-[14px] ml-2 border-none outline-none">
                                <option class="hidden" value="til" :selected="selectedLanguage === 'uz'">{{$t('translation.language')}}</option>
                                <option value="uz">O'zb</option>
                                <option value="ru">Рус</option>
                                <option value="en">Eng</option>
                              </select>
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
                            <a href="#home" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{$t('translation.navbar.list.one')}}</a>
                        </li>
                        <li>
                            <a href="#portfolio" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{$t('translation.navbar.list.two')}}</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{$t('translation.navbar.list.three')}}</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Telegram bot</a>
                        </li>
                        </ul>
                    </div>
                </div>
                <div class="w-1/3 flex justify-center items-center  ">
                    <img src="../assets/images/Vector.png" alt="cosinus_logo" class="w-[65px] h-[80px]">
                </div>
                <div class="w-1/3 flex justify-end items-center ">
                    <div class="h-[48px] bg-gradient-to-r from-[#34BCA2] to-[#1A16E9] p-0.5 rounded-lg">
                        <select id="countries" @change="changeLanguage" class="h-[44px] bg-[#16163A] text-white rounded-lg">
                            <option class="hidden" value="til" :selected="selectedLanguage === 'uz'">{{$t('translation.language')}}</option>
                            <option value="uz">O'zb</option>
                            <option value="ru">Рус</option>
                            <option value="en">Eng</option>
                          </select>
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex justify-between items-center p-5">
                <div class="flex justify-center items-center gap-6">
                    <img src="../assets/images/Cosinus.svg" alt="" class="w-[94px] h-[48px]">
                    <div class="text-white flex justify-center items-center gap-10 ml-[64px]">
                        <a href="#home">{{$t('translation.navbar.list.one')}}</a>
                        <a href="#portfolio">{{$t('translation.navbar.list.two')}}</a>
                        <div class="flex items-center">
                            <a href="#">{{$t('translation.navbar.list.three')}}</a>
                            <p class="p-1 bg-[#5A14B1] text-[10px] rounded-lg mb-5">{{$t('translation.navbar.list.new')}}</p>
                        </div>
                        <a href="#">Telegram bot</a>
                    </div>
                </div>
                <div class=" flex justify-end items-center gap-10">
                    <div class="h-[48px] flex items-center bg-gradient-to-r from-[#34BCA2] to-[#1A16E9] p-0.5 rounded-lg">
                        <select id="countries" @change="changeLanguage" class="h-[47px] bg-[#16163A] text-white rounded-lg">
                            <option class="hidden" value="til" :selected="selectedLanguage === 'uz'">{{$t('translation.language')}}</option>
                            <option value="uz">O'zb</option>
                            <option value="ru">Рус</option>
                            <option value="en">Eng</option>
                          </select>
                    </div>
                      <button class="language w-[130px] h-[48px] bg-[#343FA7] text-white hover:bg-[#1913EA] px-2 py-1 rounded-lg">{{$t('translation.navbar.list.four')}}</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { initDropdowns } from 'flowbite'

    import { useI18n } from 'vue-i18n';
    const {t} = useI18n({useScope: 'global'})

    
    // initialize components based on data attribute selectors
    onMounted(() => {
        initDropdowns();
    })
    function changeLanguage(event) {
        const selectedLanguage = event.target.value;
        console.log(selectedLanguage);
        localStorage.setItem("lang", selectedLanguage)
        window.location.reload()
    }
</script>

<style lang="scss" scoped>
   
</style>