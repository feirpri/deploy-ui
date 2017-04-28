<template>
    <div class="ci-card">
        <div class="ci-card--header-panel" :style="styles.header">
            <slot name="header"></slot>
        </div>
        <div class="ci-card--info-panel">
            <slot></slot>
        </div>
        <div class="ci-card--action-panel" v-if="hasActions">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ci-card',
    props: {
        'styles': {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
            hasActions: false,
        };
    },
    mounted() {
        this.hasActions = !!this.$el.querySelector('[slot="footer"]');
    },
};
</script>

<style lang='less'>
@borderColor: #eee;
@actionsHeight: 4rem;

.ci-card{
    position: relative;
    display: inline-block;
    width: 16rem;
    min-height: 12rem;
    border: 0.1rem solid #ddd;
    box-shadow: 0 0 0.1rem rgba(0,0,0,0.3);
    vertical-align: top;

    transition: 0.2s;

    &:hover {
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    }
    &--header-panel{
        height: 4rem;
        line-height: 4rem;
        padding: 0 1rem;
    }
    &--info-panel{
        padding: 0.9rem;
        border-top: 0.1rem solid @borderColor;
        cursor: pointer;
    }
    &--action-panel{
        display: flex;
        height: @actionsHeight;
        line-height: @actionsHeight;
        border-top: 1px solid @borderColor;
    }
}
</style>
