import { ProductRepositoryImpl } from "../../data/repositories/product.repository.remote";
import { GetAllProductsUseCase } from "../../domain/usecases/product.usecase.get-all";
import { GetProductByBrandAndTypeUseCase } from "../../domain/usecases/product.usecase.get-by-brand-and-type";
import { GetProductsByBrandUseCase } from "../../domain/usecases/product.usecase.get-by-brand";
import { GetProductsByTypeUseCase } from "../../domain/usecases/product.usecase.get-by-type";
import { GetProductByTypeModel, GetProductByBrandModel, GetProductsByBrandAndTypeModel } from "../../domain/models/product.model";
import { Product } from "../../data/interfaces/product.interface";
import { useState } from "react";

const productRepository = new ProductRepositoryImpl();
const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
const getProductsByTypeUseCase = new GetProductsByTypeUseCase(productRepository);
const getProductsByBrandUseCase = new GetProductsByBrandUseCase(productRepository);
const getProductByBrandAndTypeUseCase = new GetProductByBrandAndTypeUseCase(productRepository);

interface UseProduct {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
  getAllProducts: () => Promise<Product[]>;
  getProductsByType: (model: GetProductByTypeModel) => Promise<Product[]>;
  getProductsByBrand: (model: GetProductByBrandModel) => Promise<Product[]>;
  getProductsByBrandAndType: (model: GetProductsByBrandAndTypeModel) => Promise<Product[]>;
}

export const useProduct = (): UseProduct => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getAllProducts = async (): Promise<Product[]> => {
    try {
      setIsLoading(true);
      const response = await getAllProductsUseCase.execute();
      if (response.status) {
        setProducts(response.data);
        return response.data;
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching products:", err);
      setProducts([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByType = async (model: GetProductByTypeModel): Promise<Product[]> => {
    try {
      setIsLoading(true);
      const response = await getProductsByTypeUseCase.execute(model);
      if (response.status) {
        setProducts(response.data);
        return response.data;
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching products by type:", err);
      setProducts([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByBrand = async (model: GetProductByBrandModel): Promise<Product[]> => {
    try {
      setIsLoading(true);
      const response = await getProductsByBrandUseCase.execute(model);
      if (response.status) {
        setProducts(response.data);
        return response.data;
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching products by brand:", err);
      setProducts([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByBrandAndType = async (model: GetProductsByBrandAndTypeModel): Promise<Product[]> => {
    try {
      setIsLoading(true);
      const response = await getProductByBrandAndTypeUseCase.execute(model);
      if (response.status) {
        setProducts(response.data);
        return response.data;
      } else {
        throw new Error(response.message);
      }
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching products by brand:", err);
      setProducts([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    products,
    isLoading,
    error,
    getAllProducts,
    getProductsByType,
    getProductsByBrand,
    getProductsByBrandAndType,
  };
};