export type Pizza = {
  _id: string;
  title: string;
  image: string;
  description: string;
};

const pizzas: Pizza[] = [
  {
    _id: '1',
    title: 'Classic Pepperoni',
    description: '14" pizza with our famous pepperoni cups',
  },
].map((pizza) => ({
  ...pizza,
  // Generate a random AI-generated image for the pizza
  image: `https://boredhumans.b-cdn.net/pizza/${Math.floor(
    Math.random() * 1500
  )}.jpg`,
}));

export default pizzas;
