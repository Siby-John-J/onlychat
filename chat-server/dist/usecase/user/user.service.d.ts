import { UserDto } from 'src/domain';
import { UserRepoAbstract } from 'src/domain';
export declare class UserService {
    private userrepo;
    constructor(userrepo: UserRepoAbstract<UserDto>);
    createUser(data: UserDto): Promise<any>;
    signUpUser(data: object): any;
    getUser(id: string): Promise<object>;
    editUser(data: object): any;
    getAllUsers(): Promise<UserDto>;
}
