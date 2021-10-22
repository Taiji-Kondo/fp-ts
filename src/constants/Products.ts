import { ProductType } from '../types/product/ProductType'

const APPLE: ProductType = {
  id: 1,
  name: 'apple',
  price: 100,
  detail: {
    description: 'An Apple',
    evaluation: 4,
  },
}
const ORANGE: ProductType = {
  id: 2,
  name: 'orange',
  price: 80,
  detail: {
    description: 'An Orange',
    evaluation: 3.5,
  },
}
const BANANA: ProductType = {
  id: 3,
  name: 'banana',
  price: 200,
  detail: {
    description: 'Two Banana',
    evaluation: 1.2,
  },
}

export const PRODUCTS = [APPLE, ORANGE, BANANA]
