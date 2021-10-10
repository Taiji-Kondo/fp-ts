import {ProductType} from "./ProductType";

export type SelectedProductType = ProductType & {
  selectedCount: number
};