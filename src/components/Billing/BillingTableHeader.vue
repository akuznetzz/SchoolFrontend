<template>
    <div class="billing__header">
        <span>Тип оплаты</span>
        <span>Ставка</span>
        <span>Коэф</span>
        <span>Фикс</span>
        <span></span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.billing {


    &__header {
        display: grid;
        grid-template-columns: 120px repeat(3, 60px) 100px;
        border-right: 1px solid #000;

        span {
            padding-left: 5px;
            border-top: 1px solid #000;
            border-left: 1px solid #000;



        }


    }
}
</style>