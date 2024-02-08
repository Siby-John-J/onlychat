import { Injectable } from "@nestjs/common";
import { ChatRepoAbstract, UserDto, ChatAction } from "src/domain";

@Injectable()
export class ChatService {
    constructor(private userrepo: ChatRepoAbstract<UserDto>) {}

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
