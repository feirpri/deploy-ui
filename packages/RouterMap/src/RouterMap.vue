<template>
    <div class="ci-router-map">
        <template v-for="(item, $index) in paths">
            <span class="ci-router-map--separator" v-if="$index">></span>
            <router-link class="ci-router-map--link"
                :to="item.path" v-if="item.path"
                >{{item.name}}</router-link>
            <span class="ci-router-map--nolink" v-if="!item.path">{{item.name}}</span>
        </template>
    </div>
</template>
<script>
    const map = {
        job: '应用列表',
        add: '编辑配置', // TODO: 这个地方之后需要调整, 期望能智能适配
        detail: '构建历史',
    };
    export default {
        name: 'ci-router-map',
        computed: {
            paths() {
                const paths = this.$route.path.split('/');
                const tail = { name: map[paths.pop()], path: '' };
                const res = [];
                let result = [];
                paths.shift();
                result = paths.map((item) => {
                    res.push(item);
                    return {
                        path: `/${res.join('/')}`,
                        name: map[item],
                    };
                });
                result.push(tail);
                return result;
            },
        },
    };
</script>
<style lang='less'>
.ci-router-map{
    height: 4rem;
    line-height: 4rem;
    font-size: 0;

    &--link{
        text-decoration: none;
        font-size: 1.4rem;
        color: #20a0ff;
        &:hover{
            color: #20a0ff;
            cursor: pointer;
        }
    }
    &--separator{
        margin: 0 8px;
        color: #c0ccda;
        font-size: 1.4rem;
    }
    &--nolink{
        color: #99a9bf;
        cursor: text;
        font-size: 1.4rem;
    }
}
</style>
