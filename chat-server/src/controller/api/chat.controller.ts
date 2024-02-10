import { Controller, Body, Put, Delete, Query, Get } from "@nestjs/common";
import { ChatService } from "src/usecase/chat/chat.service";
import { ChatAction } from "src/domain";
import { GatewayService } from "src/usecase/gateway/gateway.service";

@Controller('chat')
export class ChatController {
    constructor(
      private chat: ChatService,
      private gateway: GatewayService
    ) {}

    @Put('addto_chat')
    async addToChat(@Body() data: any) {
        this.chat.addTochat(data)
    }

    @Delete('remove_user')
    async removeFromChat(@Query() data: ChatAction) {
      this.chat.removeFromChat(data);
  
      return 'get it lwal';
    }

    @Delete('clear_chat')
    async clearChat(@Query() data: any) {
      const res = this.chat.clearChat(data)

      this.gateway.onModuleInit()
      this.gateway.get(true)
    }

    @Get('getby_id')
    async getUserChat(@Query() id: any) {
      const data = this.chat.getChatDetails(id['0']);
  
      return data;
    }
}