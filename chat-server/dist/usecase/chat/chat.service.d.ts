import { ChatRepoAbstract, UserDto, ChatAction } from "src/domain";
export declare class ChatService {
    private userrepo;
    constructor(userrepo: ChatRepoAbstract<UserDto>);
    addTochat(data: ChatAction): any;
    removeFromChat(data: ChatAction): any;
    getChatDetails(data: object): any;
    addMessage(data: object): any;
    addMessageToP2(data: object): any;
    clearChat(data: object): void;
}
