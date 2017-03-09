import LocalTime from './src/LocalTime';

LocalTime.install = (Vue) => {
    Vue.filter(LocalTime.name, LocalTime);
}

export default LocalTime;
