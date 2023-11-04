<template>
    <section>
        <div class="container mx-auto text-white grid justify-center items-center gap-6 md:flex md:gap-10 border-b-2 border-white pb-5">
            <div class="flex justify-center items-center gap-1">
                <i class='bx bx-phone-call'></i>
                <p>+998981003631</p>
            </div>         
            <div class="flex justify-center items-center gap-1">
                <a href="cosinus.uz" class="flex justify-center items-center gap-1">
                    <i class='bx bx-globe'></i>
                    <p>cosinus.uz</p>
                </a>
            </div> 
            <div class="flex justify-center items-center gap-4 text-[16px] md:text-[24px]">
                <a href="https://t.me/cosinussupport_bot"><i class="bx bxl-telegram text-[#3C4BDC]"></i></a>
                <a href="https://www.instagram.com/cosinus_uz/?igshid=MzRlODBiNWFlZA%3D%3D"><i class="bx bxl-instagram text-[#3C4BDC]"></i></a>
                <a href="https://www.facebook.com/people/Cosinus-Uz/pfbid02R6om2Nyu5Ve9yD33mdZD6e4XYZdoTWogMoDh1D7jBHj7LxFuRSZw2Ejw27SNxth9l/?mibextid=LQQJ4d"><i class="bx bxl-facebook text-[#3C4BDC]"></i></a>
                <a href="https://www.youtube.com/@cosinus_uz"><i class="bx bxl-youtube text-[#3C4BDC]"></i></a>                        
            </div>
        </div>
        <div class="flex justify-center items-center mx-[20px] gap-[250px] lg:gap-[800px] 2xl:gap-[1000px] md:py-3">
            <img src="../assets/images/Cosinus.svg" alt="companyLogo" class="hidden md:block w-[80px]">
            <h3 class="text-white my-3 text-[12px] md:text-[16px] text-center">© {{new Date().getFullYear()}} {{$t('translation.footer.certificate')}}</h3>
        </div>
    </section>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const {t} = useI18n({useScope: 'global'})
</script>

<style lang="scss" scoped>

</style>