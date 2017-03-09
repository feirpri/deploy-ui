import Card from './src/Card';

Card.install = (Vue) => {
    Vue.component(Card.name, Card);
}

export default Card;
