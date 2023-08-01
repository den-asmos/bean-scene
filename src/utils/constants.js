import {
  cappuccino,
  latte,
  macchiato,
  expresso,
  beanIcon,
  badgeIcon,
  coffeeCupIcon,
  priceIcon,
  manager,
} from '../assets';

export const menu = [
  {
    title: 'Cappuccino',
    composition: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: cappuccino,
  },
  {
    title: 'Chai Latte',
    composition: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: latte,
  },
  {
    title: 'Macchiato',
    composition: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: macchiato,
  },
  {
    title: 'Expresso',
    composition: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    image: expresso,
  },
];

export const about = [
  {
    title: 'Supreme Beans',
    description: 'Beans that provides great taste',
    image: beanIcon,
  },
  {
    title: 'High Quality',
    description: 'We provide the highest quality',
    image: badgeIcon,
  },
  {
    title: 'Extraordinary ',
    description: 'Coffee like you have never tasted',
    image: coffeeCupIcon,
  },
  {
    title: 'Affordable Price',
    description: 'Our Coffee prices are easy to afford',
    image: priceIcon,
  },
];

export const feedback = [
  {
    name: 'Jonny Thomas',
    position: 'Project Manager',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
    image: manager,
  },
];
