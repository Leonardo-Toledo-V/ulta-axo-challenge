import { ProductsResponse } from "../../data/interfaces/product.interface";
import { GetProductsByBrandAndTypeModel } from "../models/product.model";
import { ProductRepository } from "../repositories/product.repository";

export class GetProductByBrandAndTypeUseCase {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute(getProductByBrandAndTypeModel: GetProductsByBrandAndTypeModel): Promise<ProductsResponse> {
    try {
      const rawData = await this.productRepository.getProductsByBrandAndType(getProductByBrandAndTypeModel);
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