import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {

    async findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}