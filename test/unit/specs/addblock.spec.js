import { createTest, createVue, destroyVM } from '../util';
import AddBlock from 'src/AddBlock/';

describe('AddBlock', () => {
  let vm;

  it('create', () => {
    vm = createTest(AddBlock, {
      style: {
        height: '130px'
      }
    }, true);
    // 检查元素正确创建
    expect(vm.$el.classList.contains('ci-add-block')).to.true;
    // 检查子元素渲染
    expect(vm.$el.querySelector('svg')).not.to.equal(undefined);
    // 检查props传值
    expect(vm.$el.style.height).to.equal('130px');
  });
});
