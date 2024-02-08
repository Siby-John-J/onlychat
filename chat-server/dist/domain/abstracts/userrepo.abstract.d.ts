import { ChatAction, UserDto } from "../dto";
export declare abstract class UserRepoAbstract<T> {
    abstract createUser(data: UserDto): Promise<any>;
    abstract editUser(data: object): any;
    abstract deleteUser(): any;
    abstract getUser(data: object | string): Promise<null | object>;
    abstract getAll(): Promise<UserDto>;
    abstract addUserToChat(data: ChatAction): any;
    abstract removeUserFromChat(data: ChatAction): any;
    abstract getChatDetails(data: object): any;
    abstract addChat(data: object): any;
    abstract addChatTo(data: object): any;
}
