import { ChatAction } from "../dto";
export declare abstract class ChatRepoAbstract<T> {
    abstract addUserToChat(data: ChatAction): any;
    abstract getChatDetails(data: object): any;
    abstract addChat(data: object): any;
    abstract addChatTo(data: object): any;
    abstract removeUserFromChat(data: ChatAction): any;
    abstract clearChat(data: object): any;
}
