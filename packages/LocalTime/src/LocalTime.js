import moment from 'moment';

moment.locale('zh-cn');
let defaultFormat = 'YYYY/MM/DD HH:mm';

export default {
    name: 'ci-local-time',
    handdle(value, format = defaultFormat, unit = 'ms') {
        let valueAlias = value;
        if (typeof valueAlias === 'number' && unit === 's') {
            valueAlias *= 1000;
        }
        if (format === 'fromNow') {
            return moment(valueAlias).fromNow();
        }
        return moment(valueAlias).format(format || defaultFormat);
    },
};
