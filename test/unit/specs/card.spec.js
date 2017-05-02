import { createTest, createVue, destroyVM, createElm } from '../util';
import Card from 'src/Card';
import Vue from 'vue/dist/vue.common.js';

describe('Card', () => {
  Card.install(Vue);
  it('create', () => {
    let vm = new Vue({
      template: `
        <ci-card>
          <div>this is default body slot</div>
        </ci-card>
      `
    }).$mount();
    expect(vm.$el.querySelector('.ci-card--info-panel').innerText.includes('this is default body slot')).to.be.true;
    expect(vm.$el.querySelector('.ci-card--action-panel')).to.be.null;
  });
  it('create with styles', () => {
    let styles = {
      header: {
        backgroundColor: 'pink',
      },
    };
    let vm = new Vue({
      template: `
        <ci-card :styles='${JSON.stringify(styles)}'>
          <div slot="header">this is header panel</div>
          <div>this is default body slot</div>
        </ci-card>
      `,
    }).$mount();
    expect(vm.$el.querySelector('.ci-card--header-panel').innerText.includes('this is header panel')).to.be.true;
    expect(vm.$el.querySelector('.ci-card--header-panel').style.backgroundColor).to.equal('pink');  
  });
  it('create with footer', () => {
    let vm = new Vue({
      template: `
        <ci-card>
          <div slot="header">this is header panel</div>
          <div>this is default body slot</div>
          <div slot="footer">this is footer panel</div>
        </ci-card>
      `,
    }).$mount(createElm());
    vm.$nextTick(() => {
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.ci-card--action-panel').innerText.includes('this is footer panel')).to.be.true;
      });
    });
  });
});
