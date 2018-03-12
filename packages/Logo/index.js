import Logo from './src/Logo';

Logo.install = (Vue) => {
    Vue.component(Logo.name, Logo);
}

export default Logo;
