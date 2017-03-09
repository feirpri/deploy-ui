const unit = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    year: 365 * 24 * 60 * 60 * 1000,
};
const mapIndex = ['秒', '分', '时', '天', '年'];

export default {
    name: 'ci-delta-time',
    handdle(value) {
        const year = Math.floor(value / unit.year);
        const day = Math.floor((value % unit.year) / unit.day);
        const hour = Math.floor((value % unit.day) / unit.hour);
        const minute = Math.floor((value % unit.hour) / unit.minute);
        const second = Math.floor((value % unit.minute) / unit.second);
        const res = [year, day, hour, minute, second];
        let testValue = 0;
        return res.filter((item) => {
            testValue += item;
            return testValue > 0;
        }).map((item, index, arr) => item + mapIndex[arr.length - index - 1]).join('');
    },
};
