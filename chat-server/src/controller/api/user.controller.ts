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
import { AnotherService } from 'src/usecase/another/another.service';

@Controller('user')
export class AnotherController {
  private refreshList = [];

  constructor(
    private jwt: jwtAbstract,
    private user: AnotherService
  ) {}

  @Post('create')
  getAnother(
    @Body() body: UserDto,
    @Res({ passthrough: true }) res: Response,
  ): object {
    const token = this.jwt.signToken(body);
    const refresh = this.jwt.refreshToken(body);
    this.refreshList.push(refresh);

    console.log(body)
    // this.user.createUser()

    res.cookie('Berer', token);
    return {
      access: token,
      refresh: refresh,
    }
  }

  @Get('signin')
  async signInUSer(@Query() data: UserAuthDto): Promise<boolean | string> {
    const res = await this.user.signUpUser(data)

    if(res !== null) {
      return res.id
    }
    
    return false
  }

  @Get('get_user')
  async getUser(@Query() id: any) {
    const res = await this.user.getUser(id.id)

    return res
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
