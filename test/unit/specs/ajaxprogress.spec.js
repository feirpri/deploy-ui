import { createTest, createVue, destroyVM } from '../util';
import AjaxProgress from 'src/AjaxProgress/';
import Vue from 'vue';

describe('AjaxProgress', () => {
  it('create', () => {
    let vm = createTest(AjaxProgress, {}, true);
    Vue.nextTick(() => {
      expect(vm.$el.classList.contains('ci-ajax-progress')).to.be.true;
      expect(vm.$el.style.display).to.equal('none');
      destroyVM(vm);
    });
  });
  it('parse props', () => {
    let vm = createTest(AjaxProgress, {
      progress: 0.5
    }, true);
    Vue.nextTick(() => {
      expect(vm.$el.style.display).not.to.equal('none');
      expect(vm.$el.querySelector('.ci-ajax-progress--bar').style.width).to.equal('50%');
      destroyVM(vm);
    });
  });
});
