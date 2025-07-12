import { ProductsResponse } from "../../data/interfaces/product.interface";
import { GetProductByBrandModel } from "../models/product.model";
import { ProductRepository } from "../repositories/product.repository";

export class GetProductsByBrandUseCase {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute(getProductByBrandModel: GetProductByBrandModel): Promise<ProductsResponse> {
    try {
      const rawData = await this.productRepository.getProductsByBrand(getProductByBrandModel);
      return {
        data: rawData,
        message: "Productos obtenidos correctamente",
        status: true,
        status_code: 200,
      };
    } catch (error) {
      return {
        data: [],
        status: false,
        message: (error as Error).message,
        status_code: 500,
      };
    }
  }
}