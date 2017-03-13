import LocalTime from './src/LocalTime';

LocalTime.install = (Vue) => {
    Vue.filter(LocalTime.name, LocalTime.handdle);
}

export default LocalTime;
