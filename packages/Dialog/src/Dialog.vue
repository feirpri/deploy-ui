<template>
    <el-dialog :title="title" ref="dialog">
        <slot></slot>
        <span slot="footer">
            <el-button @click="close(btn.cmd)" v-for="btn in buttons" :type="btn.primary ? 'primary' : ''">{{btn.name}}</el-button>
        </span>
    </el-dialog>
</template>
<script type="text/javascript">
    let defered = {};

    export default {
        name: 'ci-dialog',
        props: {
            title: {
                default: '',
                type: String,
            },
            buttons: {
                default: () => [],
                type: Array,
            },
        },
        methods: {
            open() {
                return new Promise((resolve, reject) => {
                    defered = {
                        resolve,
                        reject,
                    };
                    this.$refs.dialog.open();
                });
            },
            close(cmd) {
                if (cmd === '$cancel') {
                    this.$refs.dialog.close();
                    defered.reject();
                } else {
                    this.$refs.dialog.close();
                    defered.resolve(cmd);
                }
            },
        },
    };
</script>
