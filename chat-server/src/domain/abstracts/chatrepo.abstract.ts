import { ChatAction, UserDto } from "../dto";

export abstract class ChatRepoAbstract<T> {
    abstract addUserToChat(data: ChatAction)

    abstract getChatDetails(data: object)

    abstract addChat(data: object)

    abstract addChatTo(data: object)

    abstract removeUserFromChat(data: ChatAction)

    abstract clearChat(data: object)
}