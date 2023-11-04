<template>
    <section>
        <div class="container mx-auto lg:flex items-center gap-[24px] md:gap-[40px] lg:gap-[30px]">
            <div class="lg:w-1/2 text-white  m-[20px] p-2">
                <h1 class="text-[24px] md:text-[40px] lg:text-[56px] font-[700] font-Roboto mb-[8px] md:mb-[16px] lg:mb-[24px]">{{$t('translation.mainBottom.title')}}</h1>
                <p class="text-[14px] md:text-[18px] lg:text-[24px] font-[400] font-Roboto mb-[16px] md:mb-[24px] lg:mb-[32px]">{{$t('translation.mainBottom.description')}}</p>
                <h1 class="text-[56px] lg:text-[80px] text-[#3F4CCF] font-[700] mb-[4px]">15+</h1>
                <p class="text-[18px] lg:text-[28px] font-[400]">{{$t('translation.mainBottom.work')}}</p>
            </div>
            <div class="md:w-[85%] lg:w-[45%] 2xl:w-[43%] mx-auto">
                <ImageCarusel/> 
            </div>
        </div>
    </section>
</template>

<script setup>
    import ImageCarusel from '../ImageCarusel.vue';
    import { useI18n } from 'vue-i18n';
    const {t} = useI18n({useScope: 'global'})
</script>

<style lang="scss" scoped>

</style>