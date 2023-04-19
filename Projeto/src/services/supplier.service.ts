import SupplierRepository from "../repositories/supplier.repository";
import productRepository from "../repositories/product.repository";
import { ISupplier } from "../models/supplier.model";
import dotenv from 'dotenv';

dotenv.config();

class SupplierService {

    getAll() {
        return SupplierRepository.getAll();
    }

    getCNPJ(cnpj: string){
        return SupplierRepository.getByCNPJ(cnpj);
    }

    getProduct(id: number){
        return productRepository.getById(id);
    }

    getSupplierByProductId(productId: number){
        return SupplierRepository.getByProductId(productId);
    }

    async create(supplier: ISupplier){
        return SupplierRepository.create(supplier);
    }

    remove(cnpj: string){
        return SupplierRepository.remove(cnpj);
    }

    update(cnpj: string, supplier: ISupplier){
        return SupplierRepository.update(cnpj, supplier);
    }
}

export default new SupplierService();