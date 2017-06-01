import { createTest, createVue, destroyVM, createElm, triggerEvent, triggerKeydown } from '../util';
import RadioVersionsGroup from 'src/RadioVersionsGroup';
import Vue from 'vue';

describe('RadioVersionsGroup', () => {
  RadioVersionsGroup.install(Vue);
  it('create', (done) => {
    let vm = new Vue({
      template: `<ci-radio-versions-group v-model="value" :data="data"></ci-radio-versions-group>`,
      data() {
        return {
          value: undefined,
          data: [{
            label: 'java',
            text: 'Java',
            versions: [
              'v1.1',
              'v2.1'
            ],
          },{
            label: 'node',
            text: 'Node',
            versions: [
              'v1.2',
              'v2.2'
            ],
          }]
        }
      },
    }).$mount(createElm());
    let radioEles = vm.$el.querySelectorAll('.el-radio');
    expect(radioEles.length).to.be.equal(vm.data.length);
    expect(radioEles[0].querySelector('.el-radio__input').classList.contains('is-checked')).not.to.be.true;
    triggerEvent(radioEles[0], 'click');
    vm.$nextTick(() => {
      expect(radioEles[0].querySelector('.el-radio__input').classList.contains('is-checked')).to.be.true;
      done();
    });
  });
});
