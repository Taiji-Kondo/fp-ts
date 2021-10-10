import {ProductType} from "../types/product/ProductType";

const APPLE: ProductType = {
  id: 1,
  name: 'apple',
  price: 100
}
const ORANGE: ProductType = {
  id: 2,
  name: 'orange',
  price: 80
}
const BANANA: ProductType = {
  id: 3,
  name: 'banana',
  price: 200
}

export const PRODUCTS = [APPLE, ORANGE, BANANA]