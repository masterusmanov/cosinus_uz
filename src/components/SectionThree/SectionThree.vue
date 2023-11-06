<template>
    <section class="bg-[#060647]">
        <div class="container mx-auto grid items-center pb-10">
            <div class="text-white  m-[20px] p-2">
                <h1 class="text-[24px] md:text-[40px] lg:text-[56px] font-[700] font-Roboto mb-[8px] md:mb-[16px] lg:mb-[24px]">{{$t('translation.services.title')}}</h1>
                <p class="text-[14px] md:text-[18px] lg:text-[24px] font-[400] font-Roboto mb-[16px] md:mb-[24px] lg:mb-[32px]">{{$t('translation.services.description')}}</p>
            </div>
            <div class=" grid md:flex md:flex-wrap lg:flex-col-4 justify-beetwen text-white gap-10 md:gap-7 lg:gap-3 2xl:gap-4 m-[20px]">
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.one')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.oneDescription')}}</p>
                </div>
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.two')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.twoDescription')}}</p>
                </div>
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.three')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.threeDescription')}}</p>
                </div>
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.four')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.fourDescription')}}</p>
                </div>
            </div>
            <div class=" grid md:flex md:flex-wrap lg:flex-col-4 justify-beetwen text-white gap-10 md:gap-7 lg:gap-3 2xl:gap-4 m-[20px] lg:mt-5">
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.five')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.fiveDescription')}}</p>
                </div>
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.six')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.sixDescription')}}</p>
                </div>
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.seven')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.sevenDescription')}}</p>
                </div>
                <div class="block md:max-w-[48%] lg:max-w-[24%]">
                    <h5 class="mb-2 text-[20px] md:text-[24px] lg:text-[32px] font-[700] text-white border-l-[5px] md:border-l-[10px] border-l-[#2672E7] pl-3">{{$t('translation.services.service.eight')}}</h5>
                    <p class="font-normal text-[14px] md:text-[16px] lg:text-[18px] pl-3">{{$t('translation.services.service.eightDescription')}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const {t} = useI18n({useScope: 'global'})
</script>

<style lang="scss" scoped>

</style>