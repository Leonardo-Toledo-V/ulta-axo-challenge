import { MakeUpApi } from "../../../../shared/config/MakeUpApi";
import { AxiosError } from "axios";
import { Product } from "../interfaces/product.interface";
import { GetProductsByBrandAndTypeModel, GetProductByBrandModel, GetProductByTypeModel } from "../../domain/models/product.model";


export const getProductsByBrand = async (request: GetProductByBrandModel): Promise<Product[]> => {
  try {
    const response = await MakeUpApi.get<Product[]>(
      `?brand=${request.brand}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error al obtener productos por marca");
    }
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
}

export const getProductsByType = async (request: GetProductByTypeModel): Promise<Product[]> => {
  try {
    const response = await MakeUpApi.get<Product[]>(
      `?product_type=${request.product_type}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error al obtener productos por tipo");
    }
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
}

export const getProductsByBrandAndType = async (request: GetProductsByBrandAndTypeModel): Promise<Product[]> => {
  try {
    const response = await MakeUpApi.get<Product[]>(
      `?brand=${request.brand}&product_type=${request.product_type}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error al obtener productos por marca y tipo");
    }
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
}


export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await MakeUpApi.get<Product[]>("");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error al obtener productos");
    }
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
}