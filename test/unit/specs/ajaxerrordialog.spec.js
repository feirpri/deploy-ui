import { createTest, createVue, destroyVM, createElm } from '../util';
import AjaxErrorDialog from '../../../packages/AjaxErrorDialog';
import Vue from 'vue';

describe('AjaxErrorDialog', () => {
  const Comp = Vue.extend(AjaxErrorDialog);
  const mockErrors = [{
    msg: 'api is undefined',
    url: '/api/undefined',
  }, {
    msg: 'api with code 404',
    url: '/api/404',
  }];

  it('create', () => {
    let vm = new Comp().$mount(createElm());
    expect(vm.$el.style.display).to.equal('none');
    expect(vm.$el.classList.contains('ci-ajax-errordialog')).to.be.true;
  });

  it('check props 1', () => {
    let ele = createElm();
    let vm = new Comp({
      propsData: {
        errorStack: [mockErrors[0]],
      }
    }).$mount(ele);
    Vue.nextTick(() => {
      let domItems = vm.$el.querySelectorAll('.ci-ajax-errordialog--content-item');
      expect(domItems.length).to.equal(1);
      expect(domItems[0].children[0].innerText).to.equal(mockErrors[0].msg);
      expect(domItems[0].children[1].innerText.indexOf(mockErrors[0].url)).to.least(0);
      vm.errorStack = [];
      setTimeout(() => {
        expect(vm.$el.style.display).to.equal('none');
      }, 1000);
    });
  });

  it('check props with multi errors', () => {
    let ele = createElm();
    let vm = new Comp({
      propsData: {
        errorStack: mockErrors,
      }
    }).$mount(ele);
    Vue.nextTick(() => {
      let domItems = vm.$el.querySelectorAll('.ci-ajax-errordialog--content-item');
      expect(vm.$el.style.display).not.to.equal('none');
      expect(domItems.length).to.equal(mockErrors.length);
      mockErrors.forEach((item, index) => {
        expect(domItems[index].children[0].innerText).to.equal(item.msg);
        expect(domItems[index].children[1].innerText.indexOf(item.url)).to.least(0);
      });
      vm.errorStack = [];
      setTimeout(() => {
        expect(vm.$el.style.display).to.equal('none');
      }, 1000);
    });
  });
});
