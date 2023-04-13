import { Product } from "../models/product.model";

class ProductRepository {
    getAll(){
        return Product.find();
    }

    getById(id: number){
        return Product.findOne({id:id});
    }

    create(product: typeof Product){
        return Product.create(product);
    }

    update(id: number, product: Partial<typeof Product>){
        return Product.updateOne({id:id}, {$set:product});
    }

    remove(id: number){
        return Product.deleteOne({id:id});
    }
}

export default new ProductRepository();