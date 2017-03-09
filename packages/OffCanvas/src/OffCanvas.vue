<template>
    <div class="ci-offcanvas" @click="hide">
        <transition name="ci-offcanvas--fade">
            <div class="ci-offcanvas--bg" v-show="panelSwitcher"></div>
        </transition>
        <transition name="ci-offcanvas--slide-right">
            <div class="ci-offcanvas--main" v-show="panelSwitcher" @click.stop>
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ci-off-canvas',
    data() {
        return {
            bodyOverflow: '',
            panelSwitcher: false,
        };
    },
    methods: {
        hide() {
            this.panelSwitcher = false;
            window.document.body.style.overflow = this.bodyOverflow;
        },
        open() {
            this.panelSwitcher = true;
            this.bodyOverflow = window.document.body.style.overflow;
            window.document.body.style.overflow = 'hidden';
        },
    },
};
</script>

<style lang='less'>
.ci-offcanvas{
    &--bg{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 100;
    }
    &--main{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 101;
        overflow: auto;
    }

    &--fade-enter-active,
    &--fade-leave-active {
        transition: opacity 0.2s ease;
    }
    &--fade-leave-active {
        opacity: 0;
    }
    &--fade-enter-active,
    &--fade-leave {
        opacity: 1;
    }
    &--fade-enter {
        opacity: 0;
    }
    
    &--slide-right-enter-active,
    &--slide-right-leave-active {
        transition: transform 0.3s ease;
    }
    &--slide-right-leave-active {
        transform: translateX(100%);
    }
    &--slide-right-enter-active,
    &--slide-right-leave {
        transform: translateX(0);
    }
    &--slide-right-enter {
        transform: translateX(100%);
    }
}
</style>
