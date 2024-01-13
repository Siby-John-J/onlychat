import { AddChat, UserDto } from 'src/domain';
import { UserRepoAbstract } from 'src/domain';
export declare class AnotherService {
    private userrepo;
    constructor(userrepo: UserRepoAbstract<UserDto>);
    createUser(data: UserDto): Promise<any>;
    signUpUser(data: object): any;
    getUser(id: string): Promise<object>;
    editUser(data: object): any;
    getAllUsers(): Promise<UserDto>;
    addTochat(data: AddChat): any;
    getChatDetails(data: object): any;
}
