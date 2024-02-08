import { Injectable } from '@nestjs/common';
import { ChatAction, UserDto } from 'src/domain';
import { UserRepoAbstract } from 'src/domain';

@Injectable()
export class UserService {
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

    addTochat(data: ChatAction) {
        return this.userrepo.addUserToChat(data)
    }

    removeFromChat(data: ChatAction) {
        return this.userrepo.removeUserFromChat(data)
    }

    getChatDetails(data: object) {
        return this.userrepo.getChatDetails(data)
    }

    addMessage(data: object) {
        return this.userrepo.addChat(data)
    }

    addMessageToP2(data: object) {
        return this.userrepo.addChatTo(data)
    }
}
