import Clipboard from './src/Clipboard';

Clipboard.install = (Vue) => {
    Vue.directive(Clipboard.name, Clipboard);
}

export default Clipboard;
