import UserRepository from '../repositories/user.repository';
import { IUser } from '../models/user.model'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class UserService {

    async create(user: IUser, token: string){
        if(user.password && token == ":autenticacaoSofisticada"){
            user.password = await bcrypt.hash(user.password, 10);
        }
        return UserRepository.create(user);
    }

    async login(username: string, password: string){
        const user = await UserRepository.getByUser(username);

        if(!user) throw new Error("User não encontrado!");

        const result = await bcrypt.compare(password, user.password);

        if(result) {
            return jwt.sign({ username: user.username, password: user.password }, secretJWT, {
                expiresIn: '1h'
            });
        }

        throw new Error("Falha na autenticação");
    }

    remove(username: string, token: string){
        if(token !== ":autenticacaoSofisticada") throw new Error("Não autorizado")
        return UserRepository.remove(username);
    }
}

export default new UserService();