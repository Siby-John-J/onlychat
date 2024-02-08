import { ChatService } from "src/usecase/chat/chat.service";
import { ChatAction } from "src/domain";
export declare class ChatController {
    private chat;
    constructor(chat: ChatService);
    addToChat(data: any): Promise<void>;
    removeFromChat(data: ChatAction): Promise<string>;
    clearChat(data: any): Promise<void>;
    getUserChat(id: any): Promise<any>;
}
