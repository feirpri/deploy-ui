import Highchart from './src/Highchart';

Highchart.install = (Vue) => {
    Vue.component(Highchart.name, Highchart);
}

export default Highchart;
