import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserDto, UserAuthDto, jwtAbstract } from 'src/domain';
import { JwtGuard } from '../guards';
import { Response, Request } from 'express';

@Controller('user')
export class AnotherController {
  private refreshList = [];

  constructor(
    private jwt: jwtAbstract,
    // private user: UserService
  ) {}

  @Post('create')
  getAnother(
    @Body() body: UserDto,
    @Res({ passthrough: true }) res: Response,
  ): object {
    const token = this.jwt.signToken(body);
    const refresh = this.jwt.refreshToken(body);
    this.refreshList.push(refresh);

    res.cookie('Berer', token);
    return {
      access: token,
      refresh: refresh,
    }
  }

  @Get('signin')
  signInUSer(@Query() data: UserAuthDto): string {

    return 'get it';
  }

  @UseGuards(JwtGuard)
  @Get('chat')
  chatUser() {
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
