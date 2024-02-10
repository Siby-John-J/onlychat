/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { ChatAction, ChatRepoAbstract, chatDto } from "src/domain";
export declare class ChatRepo<T> implements ChatRepoAbstract<T> {
    private userModel;
    constructor(userModel: Model<T>);
    addChat(data: chatDto): Promise<void>;
    addChatTo(data: chatDto): Promise<void>;
    addUserToChat(data: ChatAction): Promise<{
        chat_update: import("mongoose").UpdateWriteOpResult;
        chat_update_peer2: import("mongoose").UpdateWriteOpResult;
    }>;
    removeUserFromChat(data: ChatAction): Promise<import("mongoose").UpdateWriteOpResult>;
    getChatDetails(data: object): Promise<import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>[]>;
    clearChat(data: ChatAction): Promise<import("mongoose").UpdateWriteOpResult>;
}
