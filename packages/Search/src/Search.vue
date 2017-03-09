<template>
    <div class="ci-search">
        <input class="ci-search--input" type="text" :value="value" :placeholder="placeholder" @input="emitChange" @keydown.enter="emitSearch">
        <transition-group>
            <ci-icon key="search" class="ci-search--icon" name="el-icon-search"
                v-show="!value"
                ></ci-icon>
            <ci-icon key="clearSearch" class="ci-search--icon ci-search--clearicon"
                name="el-icon-circle-close"
                v-show="!!value"
                v-on:click.native="clearSearch"
                ></ci-icon>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'ci-search',
    props: {
        value: {
            default: '',
            type: String,
        },
        placeholder: {
            default: '',
            type: String,
        },
    },
    methods: {
        clearSearch() {
            this.$emit('input', '');
            this.emitSearch();
        },
        emitChange(e) {
            this.$emit('input', e.target.value);
        },
        emitSearch() {
            this.$emit('search', this.value);
        },
    },
};
</script>

<style lang='less'>
.ci-search{
    position: relative;
    &--input{
        height: 2.4rem;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 1.2rem;
        outline: none;
        padding: 0 3rem 0 1rem;
    
        &:focus{
            border-color: #20A0FF;
        };
    }
    &--icon{
        color: #999;
        position: absolute;
        right: 1rem;
        top: 0.5rem;
    }
    &--clearicon{
        cursor: pointer;
    }
}
</style>
