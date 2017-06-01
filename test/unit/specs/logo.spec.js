import { createTest, createVue, destroyVM, createElm, triggerEvent } from '../util';
import Logo from 'src/Logo';
import Vue from 'vue';

describe('Logo', () => {
  Logo.install(Vue);
  let vm;

  it('create', () => {
    let vm = new Vue({
      template: `<ci-logo :text="text"></ci-logo>`,
      data(){
        return {
          text: 'FEIRPRI',
        };
      },
    }).$mount(createElm());
    // 检查元素正确创建
    expect(vm.$el.innerText).to.equal('FEIRPRI');
  });
});
