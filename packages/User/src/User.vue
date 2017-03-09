<template>
    <div class="ci-user">
        <el-dropdown trigger="click" @command="click" v-show="data.name">
            <span class="el-dropdown-link">
                <span>{{data.name}}</span><i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    export default {
        name: 'ci-user',
        props: {
            data: {
                default: {},
                type: Object,
            },
        },
        methods: {
            click(cmd) {
                switch (cmd) {
                case 'logout':
                    this.$emit('click-logout');
                    break;
                default:
                    break;
                }
            },
        },
    };
</script>
<style lang="less">
    .ci-user{
        cursor: pointer;
        font-size: 1.6rem;
    }
</style>
