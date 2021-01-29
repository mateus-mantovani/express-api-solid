import {MailtrapMailProvider} from "../../providers/implementations/MailtrapMailProvider";
import {MysqlUsersRepositories} from "../../repositories/implementations/MysqlUsersRepositories";
import {CreateUserUseCase} from "./CreateUserUseCase";
import {CreateUserController} from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider();
const mysqlUsersRepository = new MysqlUsersRepositories();

const createUserUseCase = new CreateUserUseCase(mysqlUsersRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }