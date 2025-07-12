import { ProductsResponse } from "../../data/interfaces/product.interface";
import { GetProductByTypeModel } from "../models/product.model";
import { ProductRepository } from "../repositories/product.repository";

export class GetProductsByTypeUseCase {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute(getProductByTypeModel: GetProductByTypeModel): Promise<ProductsResponse> {
    try {
      const rawData = await this.productRepository.getProductsByType(getProductByTypeModel);
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