import { ChatService } from "src/usecase/chat/chat.service";
import { ChatAction } from "src/domain";
import { GatewayService } from "src/usecase/gateway/gateway.service";
export declare class ChatController {
    private chat;
    private gateway;
    constructor(chat: ChatService, gateway: GatewayService);
    addToChat(data: any): Promise<void>;
    removeFromChat(data: ChatAction): Promise<string>;
    clearChat(data: any): Promise<void>;
    getUserChat(id: any): Promise<any>;
}
