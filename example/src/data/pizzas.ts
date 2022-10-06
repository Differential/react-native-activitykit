export type Pizza = {
  _id: string;
  title: string;
  image: string;
};

const pizzas: Pizza[] = [
  { _id: '1', title: 'Classic Pepperoni' },
  { _id: '2', title: 'Build your own' },
  { _id: '3', title: 'Hawaiian' },
  { _id: '4', title: 'Veggie' },
].map((pizza) => ({
  ...pizza,
  // Generate a random AI-generated image for the pizza
  image: `https://boredhumans.b-cdn.net/pizza/${Math.floor(
    Math.random() * 1500
  )}.jpg`,
}));

export default pizzas;
