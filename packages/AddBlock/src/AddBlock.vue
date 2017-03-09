<template>
    <div class="ci-add-block" v-on:click="$emit('click')" :style="style">
        <svg class="ci-add-block--svg" width="150" height="150" xmlns="http://www.w3.org/2000/svg" stroke="#666">
            <line y2="50%" x2="100%" y1="50%" x1="0" stroke-width="4"/>
            <line y2="0" x2="50%" y1="100%" x1="50%" stroke-width="4"/>
        </svg>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'ci-add-block',
    props: ['style'],
};
</script>

<style lang='less'>
.ci-add-block{
    position: relative;
    display: inline-block;
    width: 16rem;
    height: 19.4rem;
    font-size: 0;
    margin: 10px 10px;
    text-align: center;
    border: 1px solid #ddd;
    color: #999;
    cursor: pointer;

    &--svg{
        display: inline-block;
        vertical-align: middle;
        width: 110px;
        height: 110px;
        stroke: #999;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
