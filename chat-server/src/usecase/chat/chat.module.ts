import { Module } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { MongoModule } from "src/framework/mongo/mongo.module";

@Module({
    imports: [MongoModule],
    providers: [ChatService],
    exports: [ChatService]
})
export class ChatModule {}