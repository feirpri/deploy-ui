<template>
    <div class="ci-info-item" :style="{fontSize: styles.fontSize, lineHeight: styles.lineHeight}">
        <span class="ci-info-item--name" :style="{minWidth: styles.labelMinWidth}">{{name}}</span>
        <span class="ci-info-item--split">:</span>
        <span class="ci-info-item--value">{{value}}</span>
    </div>
</template>

<script>
export default {
    name: 'ci-info-item',
    props: {
        name: {
            default: '',
            type: String,
        },
        value: {
            default: '',
            type: [String, Number],
        },
        styles: {
            default: () => ({
                labelMinWidth: '10rem',
                fontSize: '1.2rem',
            }),
            type: Object,
        },
    },
};
</script>

<style lang='less'>
.ci-info-item {
    line-height: 2.4rem;
    font-size: 1.2rem;

    &--name{
        color: #666;
        display: inline-block;
        min-width: 10rem;
    }
    &--split{
        color: rgba(127,127,127,0.5);
    }
}
</style>
