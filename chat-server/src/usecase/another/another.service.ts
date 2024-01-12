import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/domain';
import { UserRepoAbstract } from 'src/domain';

@Injectable()
export class AnotherService {
    constructor(private userrepo: UserRepoAbstract<UserDto>) {}

    createUser() {
        this.userrepo.createUser()
    }

    signUpUser(data: object) : any {
        return this.userrepo.getUser(data)
    }

    getUser(id: string) {
        return this.userrepo.getUser(id)
    }
}
