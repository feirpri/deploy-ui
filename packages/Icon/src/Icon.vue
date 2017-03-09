<template>
    <i :class="name" :style="{fontSize: size + 'px'}"></i>
</template>

<script>
export default {
    name: 'ci-icon',
    props: {
        name: {
            default: '',
            type: String,
        },
        size: {
            default: 16,
            type: Number,
        },
    },
};
</script>
