<template>
    <el-dropdown class="ci-help" trigger="click" @command="click">
        <ci-icon class="ci-help--icon" name="icon-help-with-circle" :size="20"></ci-icon>
        <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item :command="$index + ''" v-for="(item, $index) in data">{{item.text}}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name: 'ci-help',
    props: ['data'],
    methods: {
        click(index) {
            const cmd = this.data[+index];
            if (cmd.link) {
                window.open(cmd.link, '_blank');
            }
        },
    },
};
</script>

<style lang='less'>
.ci-help{
    cursor: pointer;

    a{
        color: #999;
        display: inline-block;
        width: 100%;
    }
    a:hover{
        text-decoration: none;
    }
    &--icon{
        vertical-align: middle;
    }
}
</style>
