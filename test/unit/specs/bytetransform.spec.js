import { createTest, createVue, destroyVM, createElm } from '../util';
import ByteTransform from 'src/ByteTransform/';
import Vue from 'vue';

describe('ByteTransform filter', () => {
  ByteTransform.install(Vue);
  let testBytes = 102456;
  it('create default', () => {
    let template = Vue.compile(`<div>{{testBytes|ci-byte-transform}}</div>`);
    let vm = new Vue({
      data: {
        testBytes,
      },
      render: template.render
    }).$mount(createElm());
    expect(vm.$el.innerText).to.equal('100.05G');
  });
  it('create with baseUnit "B"', () => {
    let template = Vue.compile(`<div>{{testBytes|ci-byte-transform('B')}}</div>`);
    let vm = new Vue({
      data: {
        testBytes,
      },
      render: template.render
    }).$mount(createElm());
    expect(vm.$el.innerText).to.equal('100.05Kb');
  });
});
