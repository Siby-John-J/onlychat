import { Injectable } from '@nestjs/common';
import { UserDto, UserRepoAbstract } from 'src/domain';

@Injectable()
export class UserService {
    constructor(private userrepo: UserRepoAbstract<UserDto>) {}

    createUser() {
        this.userrepo.createUser()
    }
}
