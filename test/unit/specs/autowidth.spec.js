import { createTest, createVue, destroyVM, createElm } from '../util';
import AutoWidth from 'src/AutoWidth/';
import Vue from 'vue';

function triggerWindowResize() {
  if( document.createEvent) {
    var event = document.createEvent ("HTMLEvents");
    event.initEvent("resize", true, true);
    window.dispatchEvent(event);
  } else if(document.createEventObject){
    window.fireEvent("onresize");
  }
}

describe('AutoWidth directive', () => {
  console.log(Vue);
  let template = Vue.compile(`<div v-ci-autowidth="style">
      <div class="autowidth" :style="{fontSize: '14px', height: '20px'}" v-for="i in 10">{{i}}</div>
    </div>`);
  let style = {
    margin: 20,
    minWidth: 180
  };
  let vm = new Vue({
    directives: {
      'ci-autowidth': AutoWidth
    },
    data: {
      style,
    },
    render: template.render
  }).$mount(createElm());
  Vue.nextTick(() => {
    let styleText = vm.$el.querySelector('style').innerText.replace(/\r|\n/igm, ''); // 移除换行符
    let calculatedWidth = parseInt(styleText.replace(/^.*[^\w]+width\s*:\s*([\d]+).*$/ig, '$1'));
    describe('AutoWidth directive:', () => {
      it('create', () => {
        expect(vm.$el.querySelectorAll('style.ci-autowidth-style').length).to.equal(1);
      });
      it('width of item is greater than or equal to minwidth', () => {
        expect(calculatedWidth).to.be.at.least(style.minWidth);
      });
      it('is max number that match minwidth', () => {
        let width = vm.$el.getBoundingClientRect().width;
        width -= parseInt(vm.$el.style.paddingLeft) || 0;
        width -= parseInt(vm.$el.style.paddingRight) || 0;
        let x = Math.floor(width / (calculatedWidth + style.margin));
        expect(width / (x + 1) - style.margin).to.be.at.most(style.minWidth);
      });
      it('auto recalculate width on resize event', (done) => {
        vm.$el.style.width = '805px';

        // 手动触发resize事件
        triggerWindowResize();

        Vue.nextTick(() => {
          styleText = vm.$el.querySelector('style').innerText.replace(/\r|\n/igm, ''); // 移除换行符
          calculatedWidth = parseInt(styleText.replace(/^.*[^\w]+width\s*:\s*([\d]+).*$/ig, '$1'));
          let width = vm.$el.getBoundingClientRect().width;
          expect(calculatedWidth).to.be.at.least(style.minWidth);
          expect((calculatedWidth + style.margin) * 4).to.be.at.most(width);
          expect((calculatedWidth + style.margin) * 5).to.be.at.least(width);
          done();
        });
      });
    });
  });
});
