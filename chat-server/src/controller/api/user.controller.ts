import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserDto, UserAuthDto, jwtAbstract, ChatAction } from 'src/domain';
import { JwtGuard } from '../guards';
import { Response, Request } from 'express';
import { UserService } from 'src/usecase/user/user.service';

@Controller('user')
export class AnotherController {
  private refreshList = [];

  constructor(
    private jwt: jwtAbstract,
    private user: UserService,
  ) {}

  @Post('create')
  async getAnother(
    @Body() body: UserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    // const token = this.jwt.signToken(body);
    // const refresh = this.jwt.refreshToken(body);
    // this.refreshList.push(refresh);

    await this.user.createUser(body);

    // res.cookie('Berer', token);
    // return {
    //   access: token,
    //   refresh: refresh,
    // }
  }

  @Get('signin')
  async signInUSer(@Query() data: UserAuthDto): Promise<boolean | string> {
    const res = await this.user.signUpUser(data);
    
    if (res !== null) {
      return res.id;
    }

    return false;
  }

  @Get('get_user')
  async getUser(@Query() id: any) {
    const res = await this.user.getUser(id.id);

    return res;
  }

  @Get('getall')
  async getAllUsers() {
    const users = await this.user.getAllUsers();

    return users;
  }

  @Patch('edit')
  async editUser(@Body() data: UserDto) {
    this.user.editUser(data);
  }

  // @Put('addto_chat')
  // async addToChat(@Body() data: any) {
  //   this.user.addTochat(data);
  // }

  // @Delete('remove_user')
  // async removeFromChat(@Query() data: ChatAction) {
  //   this.user.removeFromChat(data);

  //   return 'get it lwal';
  // }

  // @Get('getchat')
  // async getChat() {}

  // @Delete('clear_chat')
  // async clearChat(@Query() data: any) {}

  // @Get('getby_id')
  // async getUserChat(@Query() id: any) {
  //   const data = this.user.getChatDetails(id['0']);

  //   return data;
  // }

  // @UseGuards(JwtGuard)
  @Put('chat')
  chatUser(@Body() data: object) {
    console.log(data);
    return 'lwal';
  }

  @Post('token')
  refreshToken(
    @Body() data: object,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.clearCookie('Berer');

    if (this.refreshList.includes(data['token'])) {
      // const new_token = this.jwt.verifyToken(data['token']);
      // const access_token = this.jwt.signToken({
      //   email: new_token['email'],
      //   password: new_token['password'],
      // });
      // res.cookie('Berer', access_token);
    }
  }
}
