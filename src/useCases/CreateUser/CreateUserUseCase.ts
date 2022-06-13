import { IMailProvider } from './../../providers/IMailProvider';
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateUserDTO) {
        const userExists = await this.usersRepository.findByEmail(data.email);

        if(userExists){
            throw new Error('User already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        this.mailProvider.sendMail({

            to:{
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Endereço de origem',
                email: 'noreply@origem.com'
            },
            subject: 'Assunto do email',
            body: 'Corpo do email'
        });

    }
}