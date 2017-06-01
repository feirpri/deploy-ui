import { createTest, createVue, destroyVM, createElm } from '../util';
import LocalTime from 'src/LocalTime';
import Vue from 'vue/dist/vue.common.js';

describe('LocalTime filter', () => {
  LocalTime.install(Vue);
  it('create', (done) => {
    let template = Vue.compile(`<div>{{date|ci-local-time}}</div>`);
    let vm = new Vue({
      data: {
        date: '2017-01-01 00:00',
      },
      render: template.render
    }).$mount(createElm());
    expect(vm.$el.innerText).to.equal('2017/01/01 00:00');
    vm.date = 1483286400000;
    vm.$nextTick(() => {
      expect(vm.$el.innerText).to.equal('2017/01/02 00:00');
      done();
    });
  });
  it('create with format', () => {
    let template = Vue.compile(`<div>{{date|ci-local-time('YY/MM/DD HH点mm分')}}</div>`);
    let vm = new Vue({
      data: {
        date: '2017-01-01 00:00',
      },
      render: template.render
    }).$mount(createElm());
    expect(vm.$el.innerText).to.equal('17/01/01 00点00分');
  });
  it('create with unit', () => {
    let template = Vue.compile(`<div>{{date|ci-local-time('', 's')}}</div>`);
    let vm = new Vue({
      data: {
        date: 1483228800,
      },
      render: template.render
    }).$mount(createElm());
    expect(vm.$el.innerText).to.equal('2017/01/01 08:00');
  });
});
