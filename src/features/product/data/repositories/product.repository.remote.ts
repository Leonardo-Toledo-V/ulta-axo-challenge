import { GetProductsByBrandAndTypeModel, GetProductByBrandModel, GetProductByTypeModel } from "../../domain/models/product.model";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { Product } from "../interfaces/product.interface";
import { getProductsByType, getProductsByBrand, getProductsByBrandAndType, getAllProducts } from "../datasources/product.datasource.api";

export class ProductRepositoryImpl implements ProductRepository {
  async getProductsByType(getProductByTypeModel: GetProductByTypeModel): Promise<Product[]> {
    return await getProductsByType(getProductByTypeModel);
  }

  async getProductsByBrand(getProductByBrandModel: GetProductByBrandModel): Promise<Product[]> {
    return await getProductsByBrand(getProductByBrandModel);
  }

  async getProductsByBrandAndType(getProductByBrandAndTypeModel: GetProductsByBrandAndTypeModel): Promise<Product[]> {
    return await getProductsByBrandAndType(getProductByBrandAndTypeModel);
  }

  async getAllProducts(): Promise<Product[]> {
    return await getAllProducts();
  }
}