import { createTest, createVue, destroyVM, createElm, triggerEvent } from '../util';
import Dropdown from 'src/Dropdown/';
import Vue from 'vue';

describe('Dropdown', () => {
  Dropdown.install(Vue);
  it('create', (done) => {
    let propsData = {
      data: [{
        name: '下拉1',
      }, {
        name: '下拉2',
      }, {
        name: '下拉3',
      }],
      enableSearch: false,
    };
    let vm = new Vue({
      template: `<ci-dropdown :data="data" :enableSearch="enableSearch"></ci-dropdown>`,
      data(){
        return propsData;
      },
    }).$mount(createElm());
    let menuEle = vm.$el.querySelector('.el-dropdown-menu');
    expect(menuEle.style.display).to.equal('none');
    expect(menuEle.querySelectorAll('.ci-dropdown--item').length).to.equal(propsData.data.length);
    triggerEvent(vm.$el.querySelector('.el-dropdown').children[0], 'click');
    vm.$nextTick(() => {
      expect(menuEle.style.display).not.to.equal('none');

      vm.enableSearch = true;
      vm.$nextTick(() => {
        let inputEle = menuEle.querySelector('input');
        inputEle.value = 1;
        triggerEvent(inputEle, 'input');
        vm.$nextTick(() => {
          expect(menuEle.querySelectorAll('.ci-dropdown--item').length).to.equal(1);
          destroyVM(vm);
          done();
        });
      });
    });
  });
  it('create with group', (done) => {
    let propsData = {
      mode: 'group',
      data: [{
        name: '下拉1',
        children: [{
          name: '下拉1-1',
        }, {
          name: '下拉1-2',
        }, {
          name: '下拉1-3',
        }],
      }, {
        name: '下拉2',
        children: [{
          name: '下拉1-1',
        }, {
          name: '下拉1-2',
        }, {
          name: '下拉1-3',
        }],
      }, {
        name: '下拉3',
        children: [],
      }],
    };
    let vm = new Vue({
      template: `<ci-dropdown :data="data" :mode="mode"></ci-dropdown>`,
      data(){
        return propsData;
      },
    }).$mount(createElm());
    vm.$nextTick(() => {
      let menuEle = vm.$el.querySelector('.el-dropdown-menu');
      expect(menuEle.style.display).to.equal('none');
      expect(menuEle.querySelectorAll('.ci-dropdown--item').length).to.equal(6);
      expect(menuEle.querySelectorAll('.ci-dropdown--group').length).to.equal(2);
      triggerEvent(vm.$el.querySelector('.el-dropdown').children[0], 'click');
      vm.$nextTick(() => {
        expect(menuEle.style.display).not.to.equal('none');
        destroyVM(vm);
        done();
      });
    });
  });
});
