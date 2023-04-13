import { Schema } from "mongoose";
import mongoose from "mongoose";

export const productSchema = new Schema({
    id: {type: Number},
    description: {type: String},
    img: {type: String},
    price: {type: Number},
    quantity: {type: Number},
    createdAt: {type: Date, default: new Date()}
});

export const Product = mongoose.model('Product', productSchema);







// export interface Product {
//     id: number;
//     description: string;
//     img: string;
//     price: number;
//     quantity: number;
// }