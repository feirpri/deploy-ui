import User from './src/User';

User.install = (Vue) => {
    Vue.component(User.name, User);
}

export default User;
