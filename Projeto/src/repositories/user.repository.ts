import { IUser, User } from "../models/user.model";

class UserRepository {
    getByUser(username: string) {
        return User.findOne({
            username: username
        });
    }

    create(user: IUser){
        return User.create(user);
    }

    remove(username: string){
        return User.deleteOne({ username: username});
    }
}

export default new UserRepository();