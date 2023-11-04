<template>
    <section class="flex">
        <div id="home" class="container mx-auto grid justify-center items-center lg:flex gap-6 lg:gap-[30px] mt-[16px] md:mt-[24px] lg:mt-[32px]">
            <div class="text-white m-[20px] p-2">
                <img src="../../assets/images/Group.png" alt="logotip" class="w-[149px] h-[30px] md:w-[219px] md:h-[40px] lg:w-[282px] lg:h-[52px]">
                <h1 class="text-[24px] md:text-[40px] lg:text-[48px] font-[700] font-Roboto">{{ $t('translation.mainTop.title') }}</h1>
                <p class="font-[400] text-[14px] md:text-[32px] font-Roboto mt-5">{{ $t('translation.mainTop.description' )}}</p>
            </div>
            <div>
                <Vue3Lottie :animationData="Animatsiya" class="w-[400px] h-[400px] md:w-[454px] md:h-[517px] lg:w-[630px] lg:h-[718px]" />
            </div>
        </div>
        
    </section>
</template>

<script setup>
    import { Vue3Lottie } from 'vue3-lottie';
    import Animatsiya from '../../jsonFile/Animatsiya.json';
    import { useI18n } from 'vue-i18n';
    const {t} = useI18n({useScope: 'global'})

</script>

<style lang="scss" scoped>

</style>