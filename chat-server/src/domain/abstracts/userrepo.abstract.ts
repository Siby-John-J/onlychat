import { ChatAction, UserDto } from "../dto";

export abstract class UserRepoAbstract<T> {
    abstract createUser(data: UserDto) : Promise<any>

    abstract editUser(data: object)

    abstract deleteUser()

    abstract getUser(data: object | string) : Promise<null | object>

    abstract getAll(): Promise<UserDto>

    abstract addUserToChat(data: ChatAction)

    abstract removeUserFromChat(data: ChatAction)

    abstract getChatDetails(data: object)

    abstract addChat(data: object)

    abstract addChatTo(data: object)
}