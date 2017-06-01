import { createTest, createVue, destroyVM, createElm, triggerEvent } from '../util';
import Menu from 'src/Menu';
import Vue from 'vue';

describe('Menu', () => {
  Menu.install(Vue);
  it('create', (done) => {
    let testMenu = undefined;
    let propsData = {
      data: [{
        name: '菜单1',
        icon: ''
      }, {
        name: '菜单2',
      }, {
        name: '菜单3',
      }],
    };
    let vm = new Vue({
      template: `<ci-menu :data="data" @click="switchMenu"></ci-menu>`,
      data(){
        return propsData;
      },
      methods: {
        switchMenu: function (item) {
          testMenu = item;
          return item;
        }
      },
    }).$mount(createElm());
    expect(vm.$el.querySelectorAll('.ci-menu--name').length).to.equal(propsData.data.length);
    triggerEvent(vm.$el.querySelectorAll('.el-menu-item')[1], 'click');
    expect(testMenu).to.equal(propsData.data[1]);
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.el-menu-item')[1].classList.contains('is-active')).to.be.true;
      done();
    });
  });
});
