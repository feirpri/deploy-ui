<template>
    <div class="ci-logo">
        <div class="ci-logo--text">{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'ci-logo',
    props: {
        text: {
            default: '',
            type: String,
        },
    },
};
</script>

<style lang='less'>
.ci-logo {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-family: cursive;
    
    &--text {
        color: inherit;
    }
}
</style>
