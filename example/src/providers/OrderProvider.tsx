import React, { createContext, useContext, useMemo } from 'react';
import { sum } from 'lodash';

export type CartItem = {
  description: string;
  price: number;
  quantity: number;
};

export type CartContents = {
  cart: CartItem[];
  total: number;
};

type Pet = {
  name: string;
  age: number;
  age_unit: string;
  breed: string;
};

type Image = {
  fullURL: string;
};

type ClinicTextFields = {
  headerLocation: string;
};

type Product = {
  _id: string;
  productId: string;
  imageUrl: string;
  description: string;
  price: number;
  quantity: number;
};

type CartProduct = {
  productId: string;
  description: string;
  price: number;
  quantity: number;
};

export type Campaign = {
  pet: Pet;
  campaignURL: string;
  images: Image[];
  nameTreatment: string;
  totalTreatmentCost: number;
  clinicTextFields: ClinicTextFields;
};

interface Context {
  hasCampaign: boolean;
  // cartContents: CartContents;
  campaign?: Campaign;
  products?: { products: Product[] };
}

interface Props {
  hasCampaign: boolean;
  donation: number;
  waggleFundDonation: number;
  donationType: 'one-time' | 'monthly';
  campaign?: Campaign;
  children?: React.ReactNode;
  products?: { products: Product[] };
}

const OrderContext = createContext<Context>({
  hasCampaign: false,
  // cartContents: { cart: [], total: 0 },
});

const OrderProvider: React.FC<Props> = ({
  children,
  hasCampaign,
  donation = 0,
  waggleFundDonation,
  donationType,
  campaign,
  products = { products: [] },
}: Props) => {
  function getCartContents(products: { products: Product[] }) {
    const cart: CartProduct[] = [];
    if (products.products && products.products.length > 0) {
      products.products.forEach((product) => {
        cart.push({
          productId: product.productId,
          quantity: product.quantity,
          description: product.description,
          price: product.price,
        });
      });
    }
    if (donation > 0) {
      // Get the donation they specified and the frequency
      cart.push({
        productId: 'cash',
        description: `${
          donationType === 'one-time' ? 'One-time' : 'Monthly'
        } Donation`,
        price: donation,
        quantity: 1,
      });
      // Add the service fee
      cart.push({
        productId: 'fee',
        description: 'Service Fee',
        price: donation / 10,
        quantity: 1,
      });
    }

    const total = sum(cart.map((item) => item.price));

    // Add any Waggle fund contribution here.
    return { cart, total: total + waggleFundDonation };
  }

  const state = useMemo(
    () => ({
      hasCampaign,
      donation,
      waggleFundDonation,
      donationType,
      campaign,
      cartContents: getCartContents(products),
      products,
    }),

    [donation, waggleFundDonation, donationType, products]
  );

  return (
    <OrderContext.Provider value={state}>{children}</OrderContext.Provider>
  );
};

function useOrder(): Context {
  const context = useContext(OrderContext);
  return context;
}

export { OrderProvider as default, useOrder };
