import { Schema } from 'mongoose';
import mongoose from 'mongoose';

export interface IUser {
    username: string,
    password: string
}

export const userSchema = new Schema<IUser>({
    username: {type: String},
    password: {type: String}
});

export const User = mongoose.model<IUser>('User', userSchema);