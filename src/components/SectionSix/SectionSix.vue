<template>
    <section class="bg-[#060647] py-[10px]">
        <div class="container mx-auto ">
            <div class="text-white m-[20px] p-2">
                <h1 class="text-[24px] md:text-[40px] lg:text-[56px] font-[700] font-Roboto">{{$t('translation.workCategory.title')}}</h1>
                <p class="text-[14px] md:text-[18px] lg:text-[24px] font-[400] font-Roboto mb-[16px] md:mb-[24px] lg:mb-[32px]">{{$t('translation.workCategory.description')}}</p>
            </div>
            <div class="mb-10">
                <IconCard/>
            </div>
        </div>
    </section>
</template>

<script setup>
    import IconCard from '../IconCard.vue'
</script>

<style lang="scss" scoped>

</style>