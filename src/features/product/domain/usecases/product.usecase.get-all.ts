import { ProductRepository } from "../repositories/product.repository";
import { ProductsResponse } from "../../data/interfaces/product.interface";

export class GetAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute(): Promise<ProductsResponse> {
    try {
      const rawData = await this.productRepository.getAllProducts();
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