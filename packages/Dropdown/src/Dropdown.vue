<template>
    <div class="ci-dropdown">
        <el-dropdown ref='dropdownIns' trigger="click" v-show="currentName" :menu-align="menuAlign">
            <span>
                <span>{{currentName}}</span><i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <div class="ci-dropdown--search-outer" v-show="enableSearch">
                    <ci-search class="ci-dropdown--search" v-model="search" placeholder="快速筛选"></ci-search>
                </div>
                <div class="ci-dropdown--item-outer">
                    <template v-if="mode==='group'">
                        <div class="ci-dropdown--group" v-for="group in filterData">
                            <div class="ci-dropdown--groupname">{{group.name}}</div>
                            <li class="ci-dropdown--item"
                                v-for="item in group.childs"
                                @click="click(item)"
                                >{{item.name}}</li>
                        </div>
                    </template>
                    <template v-else>
                        <li class="ci-dropdown--item"
                            v-for="item in filterData"
                            @click="click(item)"
                            >{{item.name}}</li>
                    </template>
                </div>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
    export default {
        name: 'ci-dropdown',
        props: {
            data: {
                default: [],
                type: Array,
            },
            mode: String, // mode === 'group' | other
            menuAlign: String,
            enableSearch: Boolean,
        },
        data() {
            return {
                current: undefined,
                search: '',
            };
        },
        computed: {
            currentName() {
                if (!this.current) {
                    let tempArray = this.data;
                    if (this.mode === 'group') {
                        tempArray = [];
                        this.data.forEach((item) => {
                            tempArray = tempArray.concat(item.children || []);
                        });
                    }
                    this.current = tempArray[0];
                    tempArray.forEach((item) => {
                        if (item.active) {
                            this.current = item;
                        }
                    });
                }
                return this.current ? this.current.name : '';
            },
            filterData() {
                if (!this.enableSearch) {
                    this.search = '';
                }
                if (this.mode === 'group') {
                    return this.data.filter((item) => {
                        item.childs = [];
                        if (item.children.length) {
                            item.childs = item.children.filter(
                                child => child.name.includes(this.search)
                            );
                        }
                        return item.childs.length > 0;
                    });
                }
                return this.data.filter(item => item.name.includes(this.search));
            },
        },
        methods: {
            click(item) {
                this.$refs.dropdownIns.hide();
                if (this.current !== item) {
                    this.current = item;
                    this.$emit('change', item);
                }
            },
        },
    };
</script>
<style lang='less'>
.ci-dropdown{
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    cursor: pointer;
    font-size: 1.6rem;
    
    &--item {
        list-style: none;
        line-height: 36px;
        padding: 0 10px;
        margin: 0;
        cursor: pointer;

        &:hover{
            background-color: #e5e9f2;
            color: #475669
        }
    }
    &--search-outer{
        padding: 0.5rem 1rem 1rem;
        border-bottom: 1px solid #eee;
    }
    &--item-outer{
        max-height: 50vh;
        overflow: auto;
    }
    &--groupname{
        line-height: 3rem;
        height: 3rem;
        padding: 0 1rem;
        color: #999;
        background-color: #f9f9f9;
    }
}
</style>
