<template>
    <section>
        <div class="container mx-auto ">
            <div class="text-white  m-[20px] p-2">
                <h1 class="text-[24px] md:text-[40px] lg:text-[56px] font-[700] font-Roboto mb-[8px] md:mb-[16px] lg:mb-[24px]">{{$t('translation.call.title')}}</h1>
                <p class="text-[14px] md:text-[18px] lg:text-[24px] font-[400] font-Roboto mb-[16px] md:mb-[24px] lg:mb-[32px]">{{$t('translation.call.description')}}</p>
            </div>
            <div class="m-[20px] p-2 lg:flex gap-10">
                <div class="lg:w-1/2">
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div class=" grid md:flex items-center gap-5">
                            <div class="md:w-1/2">
                                <label for="text" class="block mb-2 text-sm font-medium text-white text-[16px] md:text-[18px]">{{$t('translation.call.inputName')}} <b class="text-[#3944BB]">*</b></label>
                                <input type="text" name="email" id="email" class="bg-none border-dashed border-[#2665C6] bg-[#04042F] text-white text-[16px] rounded-lg w-full h-[55px] p-2.5" :placeholder="$t('translation.call.inputPlaceholder')" required="">
                            </div>
                            <div class="md:w-1/2">
                                <label for="email" class="block mb-2 text-sm font-medium text-white text-[16px] md:text-[18px]">{{$t('translation.call.email')}} <b class="text-[#3944BB]">*</b></label>
                                <input type="email" name="email" id="email" class="border-dashed border-[#2665C6] bg-[#04042F] text-white text-[16px] rounded-lg w-full h-[55px] p-2.5" :placeholder="$t('translation.call.email')" required="">
                            </div>
                        </div>
                        <div>
                            <label for="textarea" class="block mb-2 text-sm font-medium text-white text-[16px] md:text-[18px]">Label <b class="text-[#3944BB]">*</b></label>
                            <textarea name="description" id="description" cols="50" rows="5" class="border-dashed border-[#2665C6] bg-[#04042F] text-white text-[16px] rounded-lg w-full p-2.5" placeholder="Label"></textarea>
                        </div>
                        <button type="submit" class="w-[50%] md:w-[40%] text-white bg-[#3F4CCF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{{$t('translation.call.button')}}</button>
                    </form>
                </div>
                <div class="lg:w-1/2 mt-[32px] md:mt-[24px]">
                    <div class="flex items-center gap-4 text-[16px] md:text-[24px]">
                        <i class="bx bxs-map text-[#3C4BDC] text-[32px]"></i>
                        <p class="text-white">{{$t('translation.call.location')}}</p>
                    </div>
                    <div class="flex items-center gap-4 text-[16px] md:text-[24px] mt-[20px]">
                        <i class="bx bxs-phone text-[#3C4BDC] text-[32px]"></i>
                        <p class="text-white">+998981003631</p>
                    </div>
                    <div class="flex items-center gap-4 text-[16px] md:text-[24px] mt-[20px]">
                        <i class="bx bxs-envelope text-[#3C4BDC] text-[32px]"></i>
                        <p class="text-white">cosinus@gmail.com</p>
                    </div>
                    <div class="flex items-center gap-6 text-[16px] md:text-[24px] mt-[20px]">
                        <a href="https://t.me/cosinussupport_bot"><i class="bx bxl-telegram text-[#3C4BDC] text-[38px]"></i></a>
                        <a href="https://www.instagram.com/cosinus_uz/?igshid=MzRlODBiNWFlZA%3D%3D"><i class="bx bxl-instagram-alt text-[#3C4BDC] text-[38px]"></i></a>
                        <a href="https://www.facebook.com/people/Cosinus-Uz/pfbid02R6om2Nyu5Ve9yD33mdZD6e4XYZdoTWogMoDh1D7jBHj7LxFuRSZw2Ejw27SNxth9l/?mibextid=LQQJ4d"><i class="bx bxl-facebook text-[#3C4BDC] text-[32px]"></i></a>
                        <a href="https://www.youtube.com/@cosinus_uz"><i class="bx bxl-youtube text-[#3C4BDC] text-[38px]"></i></a>                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>