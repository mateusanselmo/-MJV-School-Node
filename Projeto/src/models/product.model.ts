import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IProduct {
    name: string;
    id: number;
    description: string;
    category: string;
    price: number;
    quantity: string;
    createdAt: string | Date;
};

export const productSchema = new Schema({
    name: {type: String},
    id: {type: Number},
    description: {type: String},
    category: {type: String},
    price: {type: Number},
    quantity: {type: Number},
    createdAt: {type: Date, default: new Date()}
});

export const Product = mongoose.model<IProduct>('Product', productSchema);