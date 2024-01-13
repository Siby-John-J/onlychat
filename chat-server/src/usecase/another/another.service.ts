import { Injectable } from '@nestjs/common';
import { AddChat, UserDto } from 'src/domain';
import { UserRepoAbstract } from 'src/domain';

@Injectable()
export class AnotherService {
    constructor(private userrepo: UserRepoAbstract<UserDto>) {}

    createUser(data: UserDto) {
        return this.userrepo.createUser(data)
    }

    signUpUser(data: object) : any {
        return this.userrepo.getUser(data)
    }

    getUser(id: string) {
        return this.userrepo.getUser(id)
    }

    editUser(data: object) {
        return this.userrepo.editUser(data)
    }

    getAllUsers() {
        return this.userrepo.getAll()
    }

    addTochat(data: AddChat) {
        return this.userrepo.addUserToChat(data)
    }

    getChatDetails(data: object) {
        return this.userrepo.getChatDetails(data)
    }
}
