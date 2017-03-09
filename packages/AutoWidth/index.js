import AutoWidth from './src/AutoWidth';

AutoWidth.install = (Vue) => {
    Vue.directive(AutoWidth.name, AutoWidth);
}

export default AutoWidth;
