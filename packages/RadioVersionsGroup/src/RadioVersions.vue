<template>
    <div class="ci-radio-versions">
        <el-radio :label="label" v-model="result.value" @click.native="setValue">
            <slot></slot>
        </el-radio>
        <el-dropdown class="ci-radio-versions-dropdown" @command="setVersion" trigger="click">
            <span>{{result.version}}<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command='"" + $index' v-for="(item, $index) in versions">{{item}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'ci-radio-versions',
        props: {
            label: {
                type: String,
                default: '',
            },
            versions: {
                type: Array,
                default: () => [],
            },
            value: {
                type: Object,
            },
        },
        mounted() {
            if (this.host.value.value === this.label) {
                this.triggerInput(this.value);
            }
        },
        computed: {
            host() {
                const parent = this.$parent;
                return parent.$options.componentName === 'CiRadioVersionsGroup' ? parent : this;
            },
            version() {
                return this.host.value.version || this.versions[0];
            },
            result() {
                return {
                    value: this.host.value.value,
                    version: this.version,
                };
            },
        },
        methods: {
            triggerInput(data = {}) {
                const value = Object.assign({
                    value: this.label,
                    version: this.version,
                }, data);
                this.host.$emit('input', value);
            },
            setVersion(index) {
                this.triggerInput({
                    version: this.versions[index],
                });
            },
            setValue() {
                this.triggerInput();
            },
        },
    };
</script>

<style lang='less'>
.ci-radio-versions {
    display: inline-block;
    margin-right: 2rem;

    &--dropdown{
        border: 1px solid #ddd;
        padding: 0.5rem 1rem;
        line-height: 1;
        cursor: pointer;
    
        i{
            color: #666;
        }
    }
}
</style>
