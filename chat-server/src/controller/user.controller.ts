import { Body, Controller, Get, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AnotherService } from 'src/usecase/another/another.service';
import { UserDto, UserAuthDto, jwtAbstract } from 'src/domain';
import { jwtAuth } from 'src/framework/jwt/jwt.service';
import { JwtGuard } from './guards/jwt.guard';
import { Response, Request } from 'express';

@Controller('user')
export class AnotherController {
  private refreshList = [];

  constructor(private another: AnotherService,
            private jwt: jwtAbstract) {}

  @Post('create')
  getAnother(@Body() body: UserDto, @Res({passthrough: true}) res: Response): object {
    const token = this.jwt.signToken(body)
    const refresh = this.jwt.refreshToken(body)
    this.refreshList.push(refresh)

    res.cookie('Berer', token)
    return {
      'access':token,
      'refresh': refresh
    }
  }

  @Get('signin')
  signInUSer(@Query() data: UserAuthDto): string {
    console.log(data)

    return 'get it'
  }

  @UseGuards(JwtGuard)
  @Get('chat')
  chatUser() {
    return 'lwal'
  }

  @Post('token')
  refreshToken(@Body() data: object, @Res({passthrough: true}) res: Response) {
    res.clearCookie('Berer')
    
    if(this.refreshList.includes(data['token'])) {
      const new_token = this.jwt.verifyToken(data['token'])

      const access_token = this.jwt.signToken({
        email: new_token['email'],
        password: new_token['password']
      })

      res.cookie('Berer', access_token)
      // console.log(new_token)
    }


  }
}
