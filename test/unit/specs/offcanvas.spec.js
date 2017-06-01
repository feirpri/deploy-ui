import { createTest, createVue, destroyVM, createElm, triggerEvent } from '../util';
import OffCanvas from 'src/OffCanvas';
import Vue from 'vue';

describe('OffCanvas', () => {
  OffCanvas.install(Vue);
  it('create', (done) => {
    let vm = new Vue({
      template: `<ci-off-canvas ref="offcanvas"><div class="test">test</div></ci-off-canvas>`,
    }).$mount(createElm());
    expect(vm.$el.querySelector('.test').innerText).to.equal('test');
    expect(vm.$el.querySelector('.ci-offcanvas--main').style.display).to.equal('none');
    expect(vm.$el.querySelector('.ci-offcanvas--bg').style.display).to.equal('none');
    
    vm.$refs.offcanvas.open();
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.ci-offcanvas--bg').style.display).not.to.equal('none');
      expect(vm.$el.querySelector('.ci-offcanvas--main').style.display).not.to.equal('none');
      expect(window.document.body.style.overflow).to.equal('hidden');

      vm.$refs.offcanvas.hide();

      setTimeout(() => {
        expect(vm.$el.querySelector('.ci-offcanvas--main').style.display).to.equal('none');
        expect(vm.$el.querySelector('.ci-offcanvas--bg').style.display).to.equal('none');
        done();
      }, 1000);
    });
  });
});
