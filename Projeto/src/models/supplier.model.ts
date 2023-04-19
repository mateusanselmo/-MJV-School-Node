import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export interface ISupplier {
    company: string;
    cnpj: number;
    category: string;
    email: string;
    site?: string;
    phone: string;
    productId: number;
    createdAt: string | Date;
};

export const supplierSchema = new Schema<ISupplier>({
    company: {type: String},
    cnpj: {type: Number},
    category: {type: String},
    email: {type: String},
    site: {type: String},
    phone: {type: String},
    productId: {type: Number},
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export const Supplier = mongoose.model<ISupplier>('Supplier', supplierSchema);