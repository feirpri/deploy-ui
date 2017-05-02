import Search from './src/Search';
import Icon from '../Icon';

Search.install = (Vue) => {
	Vue.use(Icon);
    Vue.component(Search.name, Search);
}

export default Search;
