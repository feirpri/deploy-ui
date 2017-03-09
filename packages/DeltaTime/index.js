import DeltaTime from './src/DeltaTime';

DeltaTime.install = (Vue) => {
    Vue.filter(DeltaTime.name, DeltaTime);
}

export default DeltaTime;
