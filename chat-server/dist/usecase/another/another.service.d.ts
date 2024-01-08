import { UserDto } from 'src/domain';
import { UserRepoAbstract } from 'src/domain';
export declare class AnotherService {
    private userrepo;
    constructor(userrepo: UserRepoAbstract<UserDto>);
    createUser(): void;
}
