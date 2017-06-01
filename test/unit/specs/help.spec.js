import { createTest, createVue, destroyVM, createElm, triggerEvent } from '../util';
import Help from 'src/Help';
import Vue from 'vue';

describe('Help', () => {
  Help.install(Vue);
  let vm;

  it('create', () => {
    let propsData = [{
      text: 'Link1',
      link: 'http://www.jd.com',
    }, {
      text: 'Link2',
      link: 'http://www.jd.com',
    }];
    let vm = new Vue({
      template: `<ci-help :data="data"></ci-help>`,
      data(){
        return {
          data: propsData,
        };
      },
    }).$mount(createElm());
    // 检查元素正确创建
    expect(vm.$el.classList.contains('ci-help')).to.true;
    expect(vm.$el.querySelectorAll('.el-dropdown-menu__item').length).to.equal(propsData.length);
    expect(vm.$el.querySelector('.el-dropdown-menu').style.display).to.equal('none');
  });
});
