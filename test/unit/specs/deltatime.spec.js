import { createTest, createVue, destroyVM, createElm } from '../util';
import DeltaTime from 'src/DeltaTime/';
import Vue from 'vue';

describe('DeltaTime filter', () => {
  DeltaTime.install(Vue);
  let startDate = new Date('2017-01-01');
  let endDate = new Date('2018-02-04');
  endDate.setHours(3 + 8, 4, 5);
  it('create', () => {
    let template = Vue.compile(`<div>{{deltaDate|ci-delta-time}}</div>`);
    let vm = new Vue({
      data: {
        deltaDate: endDate - startDate,
      },
      render: template.render
    }).$mount(createElm());
    expect(vm.$el.innerText).to.equal('1年34天3时4分5秒');
  });
});
