import { createTest, createVue, destroyVM, createElm, triggerEvent, triggerKeydown } from '../util';
import Radio from 'src/Radio/';
import Vue from 'vue';

describe('Radio', () => {
  Radio.install(Vue);
  it('create', (done) => {
    let logoutEventValue = 0;
    let vm = new Vue({
      template: `<div><ci-radio v-model="value" :label="sex[0]"></ci-radio><ci-radio v-model="value" :label="sex[1]"></ci-radio></div>`,
      data() {
        return {
          sex: ['male', 'female'],
          value: 'male'
        }
      },
    }).$mount(createElm());
    let radioEles = vm.$el.querySelectorAll('.ci-radio--circle');
    expect(radioEles[0].classList.contains('ci-radio--checked')).to.be.true;
    expect(radioEles[1].classList.contains('ci-radio--checked')).to.be.false;
    triggerEvent(vm.$el.querySelectorAll('.ci-radio')[1], 'click');
    vm.$nextTick(() => {
      expect(radioEles[0].classList.contains('ci-radio--checked')).to.be.false;
      expect(radioEles[1].classList.contains('ci-radio--checked')).to.be.true;
      done();
    });
  });
});
