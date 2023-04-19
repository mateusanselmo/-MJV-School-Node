import { ISupplier, Supplier } from "../models/supplier.model";

class SupplierRepository {
    getAll() {
        return Supplier.find();
    }

    getByCNPJ(cnpj: string) {
        return Supplier.findOne({
            cnpj: cnpj
        });
    }

    getByProductId(productId: number){
        return Supplier.findOne({
            productId: productId
        });
    }

    create(supplier: ISupplier){
        return Supplier.create(supplier);
    }

    update(cnpj: string, supplier: Partial<ISupplier>){
        return Supplier.updateOne({cnpj: cnpj}, {$set: supplier});
    }

    remove(cnpj: string){
        return Supplier.deleteOne({ cnpj: cnpj});
    }
}

export default new SupplierRepository();