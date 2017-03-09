import ByteTransform from './src/ByteTransform';

ByteTransform.install = (Vue) => {
    Vue.filter(ByteTransform.name, ByteTransform);
}

export default ByteTransform;
