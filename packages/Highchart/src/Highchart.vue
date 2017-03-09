<script>
import Highcharts from 'highcharts';

const Chart = Highcharts.Chart;

Highcharts.setOptions({
    credits: {
        enabled: false,
    },
    global: {
        useUTC: true,
    },
});

export default {
    name: 'ci-highchart',
    template: '<div></div>',
    props: {
        option: {
            default: {},
            type: Object,
        },
        data: {
            default: [],
            type: Array,
        },
    },
    mounted() {
        this.initChart();
    },
    beforeDestory() {
        this.chart.destory();
    },
    methods: {
        initChart() {
            this.chart = new Chart(this.$el, Object.assign({}, this.option, {
                series: this.data,
            }));
        },
    },
    watch: {
        data(n) {
            if (n && n instanceof Array) {
                n.forEach((item, index) => {
                    if (!this.chart.series[index]) {
                        this.chart.addSeries(item);
                    } else {
                        this.chart.series[index].setData(item.data);
                    }
                });
            }
        },
    },
};
</script>
