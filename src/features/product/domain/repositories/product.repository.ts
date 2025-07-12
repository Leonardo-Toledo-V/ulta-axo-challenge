import {  Product } from "../../data/interfaces/product.interface";

import { GetProductsByBrandAndTypeModel, GetProductByBrandModel, GetProductByTypeModel } from "../models/product.model";

export interface ProductRepository {
  getProductsByBrand(brand: GetProductByBrandModel): Promise<Product[]>;
  getProductsByType(productType: GetProductByTypeModel): Promise<Product[]>;
  getProductsByBrandAndType(brandAndType: GetProductsByBrandAndTypeModel): Promise<Product[]>;
  getAllProducts(): Promise<Product[]>;
}