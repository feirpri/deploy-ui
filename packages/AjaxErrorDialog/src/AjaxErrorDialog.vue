<template>
    <el-dialog title="" v-model="showErrorDialog"
        @close="$emit('close')"
        class="ci-ajax-errordialog">
        <div class="ci-ajax-errordialog--icon">
            <i class="el-icon-circle-close"></i>
        </div>
        <h2 class="ci-ajax-errordialog--title">API接口出错</h2>
        <div class="ci-ajax-errordialog--content">
            <div v-for="item in errorStack" class="ci-ajax-errordialog--content-item">
                <span>{{item.msg}}</span>
                <span class="ci-ajax-errordialog--url"> ( {{item.url}} )</span>
            </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'ci-ajax-errordialog',
    props: {
        errorStack: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        showErrorDialog() {
            return !!this.errorStack.length;
        },
    },
};
</script>

<style lang='less'>
.ci-ajax-errordialog{
    &--icon{
        color: #FF4949;
        font-size: 6rem;
        float: left;
        margin-top: -20px;
    }
    &--content, &--title{
        margin-left: 7rem;
    }
    &--title {
        margin-top: -20px;
        margin-bottom: 1rem;
    }
    &--content-item{
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.5rem;
    }
    &--url{
        font-size: 1.2rem;
        color: #999;
    }
}
</style>

