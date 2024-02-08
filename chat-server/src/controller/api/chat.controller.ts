import { Controller, Body, Put, Delete, Query, Get } from "@nestjs/common";
import { ChatService } from "src/usecase/chat/chat.service";
import { ChatAction } from "src/domain";

@Controller('chat')
export class ChatController {
    constructor(private chat: ChatService) {}

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
      console.log(data)
      
    }

    @Get('getby_id')
    async getUserChat(@Query() id: any) {
      const data = this.chat.getChatDetails(id['0']);
  
      return data;
    }
}