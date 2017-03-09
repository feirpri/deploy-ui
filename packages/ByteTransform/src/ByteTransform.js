const unit = {
    B: 1,
    Kb: 1024,
    M: 1024 * 1024,
    G: 1024 * 1024 * 1024,
    T: 1024 * 1024 * 1024 * 1024,
};

export default {
    name: 'ci-byte-transform',
    handdle(value, baseUnit = 'M') {
        const formatedValue = window.parseInt(value * unit[baseUnit]);
        const formatedUnit = formatedValue > unit.T ? 'T'
            : formatedValue > unit.G ? 'G'
            : formatedValue > unit.M ? 'M'
            : formatedValue > unit.Kb ? 'Kb'
            : 'B';

        return window.parseFloat(Math.round((formatedValue / unit[formatedUnit]) * 100) / 100)
            + formatedUnit;
    },
};
