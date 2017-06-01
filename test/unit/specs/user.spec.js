import { createTest, createVue, destroyVM, createElm, triggerEvent, triggerKeydown } from '../util';
import User from 'src/User';
import Vue from 'vue';

describe('User', () => {
  User.install(Vue);
  it('create', () => {
    let logoutEventValue = 0;
    let vm = new Vue({
      template: `<ci-user :data="user" @click-logout="logout"></ci-user>`,
      data() {
        return {
          user: {
            name: 'feirpri',
          },
        }
      },
      methods: {
        logout() {
          logoutEventValue = 'logout';
        },
      },
    }).$mount(createElm());
    expect(vm.$el.querySelector('.el-dropdown-link').innerText).to.equal('feirpri');
    triggerEvent(vm.$el.querySelector('.el-dropdown-menu__item'), 'click');
    expect(logoutEventValue).to.equal('logout');
  });
});
