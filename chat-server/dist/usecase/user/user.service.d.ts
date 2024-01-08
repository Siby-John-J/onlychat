import { UserDto, UserRepoAbstract } from 'src/domain';
export declare class UserService {
    private userrepo;
    constructor(userrepo: UserRepoAbstract<UserDto>);
    createUser(): void;
}
