<template>
	<div class="ci-menu">
		<el-menu default-active="0" mode="vertical" theme="dark" @select="select">
			<el-menu-item :index="$index + ''" v-for="(nav, $index) in data">
                <ci-icon class="ci-menu--icon" :name="nav.icon"></ci-icon>
                <span class="ci-menu--name">{{nav.name}}</span>
            </el-menu-item>
		</el-menu>
	</div>
</template>
<script>
    export default {
        name: 'ci-menu',
        props: {
            data: {
                type: Array,
                default: [],
                required: true,
            },
        },
        methods: {
            select(index) {
                this.$emit('click', this.data[index]);
            },
        },
    };
</script>
<style lang='less'>
.ci-menu{
    &--icon, &--name{
        vertical-align: middle;
    }
}
</style>
