import moment from 'moment';

moment.locale('zh-cn');
export default {
    name: 'ci-local-time',
    handdle(value, format = 'YYYY/MM/DD HH:mm') {
        let valueAlias = value;
        if (typeof valueAlias === 'number') {
            valueAlias *= 1000;
        }

        if (format === 'fromNow') {
            return moment(valueAlias).fromNow();
        }
        return moment(valueAlias).format(format);
    },
};
