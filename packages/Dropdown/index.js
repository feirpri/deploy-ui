import Dropdown from './src/Dropdown';
import Search from '../Search';

Dropdown.install = (Vue) => {
	Vue.use(Search);
    Vue.component(Dropdown.name, Dropdown);
}

export default Dropdown;
