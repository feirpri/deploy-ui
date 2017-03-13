<template>
    <div class="ci-radio" @click="$emit('input', label)">
        <span class="ci-radio--circle" :class="{'ci-radio--checked': label === value}"></span>
        <slot>{{label}}</slot>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'ci-radio',
        props: ['label', 'value'],
        mounted() {
            console.log(this);
        },
    };
</script>

<style lang='less'>
.ci-radio {
    display: inline-block;
    cursor: pointer;
    
    &--circle{
        display: inline-block;
        border: 1px solid #c0ccda;
        width: 18px;
        height: 18px;
        border-radius: 50%;
    }

    &--checked{
        border: 5px solid #20a0ff;
    }
}
</style>
