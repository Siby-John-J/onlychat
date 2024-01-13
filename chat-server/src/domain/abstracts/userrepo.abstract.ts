import { AddChat, UserDto } from "../dto";

export abstract class UserRepoAbstract<T> {
    abstract createUser(data: UserDto) : Promise<any>

    abstract editUser(data: object)

    abstract deleteUser()

    abstract getUser(data: object | string) : Promise<null | object>

    abstract getAll(): Promise<UserDto>

    abstract addUserToChat(data: AddChat)

    abstract getChatDetails(data: object)
}