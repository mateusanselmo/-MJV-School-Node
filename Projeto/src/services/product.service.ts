import ProductRepository from "../repositories/product.repository";
import { IProduct } from "../models/product.model";

class ProductService {

    getAll(){
        return ProductRepository.getAll();
    }

    getById(id: number){
        return ProductRepository.getById(id);
    }

    create(product: IProduct){
        return ProductRepository.create(product);
    }

    update(id: number, product: IProduct){
        return ProductRepository.update(id, product);
    }

    remove(id: number){
        return ProductRepository.remove(id);
    }

}

export default new ProductService();