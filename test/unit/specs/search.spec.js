import { createTest, createVue, destroyVM, createElm, triggerEvent, triggerKeydown } from '../util';
import Search from 'src/Search/';
import Vue from 'vue';

describe('Search', () => {
  Search.install(Vue);
  it('create', (done) => {
    let inputEventValue = 0;
    let searchEventValue = 0;
    let vm = new Vue({
      template: `<ci-search :value="searchStr" :placeholder="'搜索'" @input="onInput" @search="onSearch"></ci-search>`,
      data() {
        return {
          searchStr: 'init',
        }
      },
      methods: {
        onInput(value) {
          inputEventValue = value;
        },
        onSearch(value) {
          searchEventValue = value;
        },
      },
    }).$mount(createElm());
    vm.$nextTick(() => {
      let inputEle = vm.$el.querySelector('input');
      expect(inputEle.getAttribute('placeholder')).to.equal('搜索');
      expect(inputEle.value).to.equal('init');
      
      vm.searchStr = 'test';

      vm.$nextTick(() => {
        triggerEvent(inputEle, 'input');
        triggerKeydown(inputEle, 13);
        expect(inputEventValue).to.equal('test');
        expect(searchEventValue).to.equal('test');
        done();
      });
    });
  });
});
