import Vue from 'vue';

function reCalc() {
    if (!reCalc.$$config) {
        return;
    }
    const ele = reCalc.$$config.ele;
    const options = reCalc.$$config.options;
    const flag = reCalc.$$config.flag;
    const minWidth = options.minWidth || 100;
    const margin = options.margin || 0;
    const eleStyle = window.getComputedStyle(ele);
    Vue.nextTick(() => {
        let totalWidth = window.parseInt(eleStyle.width);
        totalWidth -= window.parseInt(eleStyle.paddingLeft);
        totalWidth -= window.parseInt(eleStyle.paddingRight);
        let minNum = Math.floor(totalWidth / (minWidth + margin));
        let width = Math.ceil((totalWidth / minNum - margin) * 100) / 100;
        const style = ele.getElementsByClassName('ci-autowidth-style')[0] || window.document.createElement('style');
        style.setAttribute('class', 'ci-autowidth-style');
        style.innerText = `[${flag}] .autowidth{
            width: ${width}px;
            display: inline-block;
            margin-left: ${margin/2}px;
            margin-right: ${margin/2}px;}`;
        ele.insertBefore(style, ele.children[0]);
    });
}

export default {
    name: 'ci-autowidth',
    bind($el, $binding) {
        const elAlias = $el;
        const flag = `data-autowidth-${Math.round(Math.random() * 100000)}`;
        elAlias.setAttribute(flag, '');
        elAlias.style.fontSize = 0;
        reCalc.$$config = {
            ele: elAlias,
            flag,
            options: $binding.value,
        };
        reCalc();
        window.addEventListener('resize', reCalc);
    },
    unbind() {
        window.removeEventListener('resize', reCalc);
    },
};
